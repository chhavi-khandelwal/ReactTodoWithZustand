export interface Todo {
  id: number;
  content: string;
  done?: boolean;
}

export interface Store {
  todos: Todo[];
  setTodo: (todo: Todo) => void;
  removeTodo: (id: number) => void;
  setStatus: (id: number, done: boolean) => void;
}
