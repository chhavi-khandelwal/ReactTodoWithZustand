import React from 'react';

export type Props = {
  type?: string;
  disabled?: boolean;
  changeListener?: Function;
  error?: string;
  placeholder?: string;
  name?: string;
  className?: string;
  testId?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, Props>((props: Props, ref) => {
  const {
    disabled,
    placeholder,
    error,
    changeListener = () => {},
    type,
    name,
    className,
    testId,
  } = props;

  const onTextChange = (event: { target: HTMLInputElement }) => {
    const { value } = event.target;
    changeListener(value);
  };

  return (
    <div className="relative">
      <input
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        onChange={onTextChange}
        name={name}
        ref={ref}
        className={
          'todo-input ' +
          (error ? 'border-red-500 ' : 'border-gray-300 ') +
          className
        }
        data-testid={testId}
      />
      {error && <span className="error-container">{error}</span>}
    </div>
  );
});

export default Input;
