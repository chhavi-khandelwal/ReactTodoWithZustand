import create from 'zustand';
import { persist } from 'zustand/middleware';
import { Todo, Store } from './todo.types';

const store = (set: any) => ({
  todos: [],
  setTodo: (todo: Todo) =>
    set((state: Store) => ({
      todos: [...state.todos, todo],
    })),
  removeTodo: (id: number) =>
    set((state: Store) => ({
      todos: state.todos.filter((todo) => id !== todo.id),
    })),
  setStatus: (id: number, done: boolean) =>
    set((state: Store) => ({
      todos: state.todos.map((todo) =>
        id === todo.id ? { ...todo, done: done } : todo
      ),
    })),
});

const persistedStore = persist<Store>(store, {
  name: 'todos-storage',
});

export const useStore = create<Store>(persistedStore);
