import { useEffect, useState } from 'react';
import { useStore } from '../store/store';
import { Todo } from '../store/todo.types';
import Filters from './Filters';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { status } from '../utils/todoStatus';
import { filterTodos } from '../utils/filterTodos';

export default function TodoPage() {
  const todos: Todo[] = useStore((state) => state.todos);

  const [filteredTodos, setFilteredTodos] = useState<Todo[]>(todos);
  const [currentFilter, setCurrentFilter] = useState<string>(status.ALL);

  useEffect(() => {
    setFilteredTodos(filterTodos(todos, currentFilter));
  }, [todos]);

  return (
    <div className="todo-page-container md:pt-30">
      <div className="todo-heading">TODO List</div>
      <Filters
        setFilteredTodos={setFilteredTodos}
        currentFilter={currentFilter}
        setCurrentFilter={setCurrentFilter}
      />
      <TodoForm />
      <TodoList filteredTodos={filteredTodos} />
    </div>
  );
}
