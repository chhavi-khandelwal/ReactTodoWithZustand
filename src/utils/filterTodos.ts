import { Todo } from '../store/todo.types';
import { status } from '../utils/todoStatus';

export const filterTodos = (todos: Todo[], filter: string) => {
  switch (filter) {
    case status.ACTIVE:
      return todos.filter((todo) => !todo.done);
    case status.COMPLETED:
      return todos.filter((todo) => todo.done);
    case status.ALL:
    default:
      return todos;
  }
};
