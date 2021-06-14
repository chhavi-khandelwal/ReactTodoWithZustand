import React from 'react';

export type Props = {
  checked?: boolean;
  onChange?: ((event: React.ChangeEvent) => void) & Function;
  name?: string;
  htmlFor?: string;
  label?: string;
  value?: string;
  testId?: string;
  labelId?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Radio = React.forwardRef<HTMLInputElement, Props>((props: Props, ref) => {
  const {
    onChange = () => {},
    name,
    htmlFor,
    label,
    value,
    checked,
    testId,
    labelId,
  } = props;

  return (
    <div className="flex-center mr-10 cursor-pointer">
      <input
        id={htmlFor}
        type="radio"
        name={name}
        ref={ref}
        onChange={onChange}
        checked={checked}
        value={value}
        className="mr-0.5"
        data-testid={testId}
      />
      {label && (
        <label htmlFor={htmlFor} data-testid={labelId}>
          {label}
        </label>
      )}
    </div>
  );
});

Radio.defaultProps = {
  checked: false,
};

export default Radio;
