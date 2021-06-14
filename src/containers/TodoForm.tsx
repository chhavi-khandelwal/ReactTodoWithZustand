import { useStore } from '../store/store';
import Input from '../components/Input/Input';
import { useForm } from 'react-hook-form';
import Submit from '../assets/images/submit.png';
interface FormData {
  todoInputText: string;
}

export default function TodoForm() {
  const setTodo = useStore((state) => state.setTodo);

  const { register, errors, handleSubmit, reset } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    const todo = {
      content: data.todoInputText,
      id: new Date().getTime(),
      done: false,
    };
    setTodo(todo);
    reset({});
  };

  return (
    <form
      onSubmit={handleSubmit((data) => onSubmit(data))}
      data-testid="form"
      className="flex-center mb-30"
    >
      <Input
        type="text"
        ref={register({ required: true, maxLength: 50 })}
        name="todoInputText"
        placeholder="Enter todo"
        error={
          errors?.todoInputText?.type === 'required'
            ? 'Enter a todo'
            : errors?.todoInputText?.type === 'maxLength'
            ? 'Max length of 50 exceeded'
            : ''
        }
        testId="test-input"
      />
      <button type="submit" data-testid="submit" className="w-20 h-20">
        <img src={Submit} width={30} height={30} alt="Submit" />
      </button>
    </form>
  );
}
