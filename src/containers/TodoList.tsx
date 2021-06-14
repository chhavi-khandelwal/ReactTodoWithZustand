import { useStore } from '../store/store';
import { Todo } from '../store/todo.types';
import Tick from '../assets/images/tick.png';
import Cross from '../assets/images/cross.png';

interface Props {
  filteredTodos: Todo[];
}

export default function TodoList({ filteredTodos }: Props) {
  const removeTodo = useStore((state) => state.removeTodo);
  const setStatus = useStore((state) => state.setStatus);

  return (
    <>
      {filteredTodos.map((todo) => (
        <div key={todo.id} className="todo-item group">
          <div
            className={
              'todo-content ' +
              (todo.done ? 'line-through text-gray-400' : 'text-gray-700')
            }
          >
            {todo.content}
          </div>

          <div
            onClick={() => setStatus(todo.id, !todo.done)}
            data-testid="toggle-done-btn"
            className={
              'todo-active ' + (todo.done ? '' : 'border-gray-200  border')
            }
          >
            {todo.done && (
              <img
                src={Tick}
                className="md:w-30 md:h-30 w-20 h-20"
                alt="tick "
              />
            )}
          </div>
          <div
            onClick={() => removeTodo(todo.id)}
            data-testid="remove-btn"
            className="todo-remove-btn group-hover:visible md:invisible"
            title="Remove"
          >
            <img src={Cross} width={20} height={20} alt="remove" />
          </div>
        </div>
      ))}
    </>
  );
}
