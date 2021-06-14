import { useRef } from 'react';
import { useStore } from '../store/store';
import { Todo } from '../store/todo.types';
import Radio from '../components/Radio/Radio';
import { status } from '../utils/todoStatus';
import { filterTodos } from '../utils/filterTodos';

interface Props {
  setFilteredTodos: (todos: Todo[]) => void;
  setCurrentFilter: (filter: string) => void;
  currentFilter: string;
}

export default function Filters({
  setFilteredTodos,
  setCurrentFilter,
  currentFilter,
}: Props) {
  const todos: Todo[] = useStore((state) => state.todos);

  const filterByStatus: (filter: string) => void = (filter) => {
    setCurrentFilter(filter);
    setFilteredTodos(filterTodos(todos, filter));
  };

  const completedRef = useRef(null);
  const allRef = useRef(null);
  const doneRef = useRef(null);

  return (
    <div className="filter-container">
      <span className="filter-label">Status:</span>
      <Radio
        type="radio"
        label="Done"
        htmlFor={status.COMPLETED}
        value={status.COMPLETED}
        name="status"
        ref={doneRef}
        checked={currentFilter === status.COMPLETED}
        onChange={() => filterByStatus(status.COMPLETED)}
        testId="done"
        labelId="label-done"
      />

      <Radio
        type="radio"
        label="Active"
        htmlFor={status.ACTIVE}
        value={status.ACTIVE}
        name="status"
        checked={currentFilter === status.ACTIVE}
        ref={completedRef}
        testId="active"
        labelId="label-active"
        onChange={() => filterByStatus(status.ACTIVE)}
      />

      <Radio
        type="radio"
        label="ALL"
        htmlFor={status.ALL}
        name="status"
        value={status.ALL}
        ref={allRef}
        checked={currentFilter === status.ALL}
        onChange={() => filterByStatus(status.ALL)}
        testId="all"
        labelId="label-all"
      />
    </div>
  );
}
