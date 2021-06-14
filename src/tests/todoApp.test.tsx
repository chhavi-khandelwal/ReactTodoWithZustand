import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import TodoPage from '../containers/TodoPage';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';

describe('TodoApp', () => {
  describe('Todo List', () => {
    test('Create a TODO', async () => {
      render(<App />);
      const input = screen.getByTestId('test-input');
      fireEvent.change(input, { target: { value: 'todo 1' } });
      fireEvent.click(screen.getByTestId('submit'));

      await waitFor(() => {
        expect(screen.queryByText('todo 1')).toBeInTheDocument();
      });
    });

    test('Input resets after submit', async () => {
      render(<TodoPage />);
      const input = screen.getByTestId('test-input');
      await waitFor(() => {
        expect(input.textContent).toBe('');
      });
    });

    test('error on submit without text', async () => {
      render(<TodoPage />);

      fireEvent.submit(screen.getByTestId('submit'));

      await waitFor(() => {
        expect(screen.queryByText('Enter a todo')).toBeInTheDocument();
      });
    });

    test('remove a TODO', async () => {
      render(<TodoPage />);
      expect(screen.queryByText('todo 1')).toBeInTheDocument();
      fireEvent.click(screen.getByTestId('remove-btn'));
      await waitFor(async () => {
        await waitFor(() => {
          expect(screen.queryByText('todo 1')).not.toBeInTheDocument();
        });
      });
    });

    test('mark a TODO as completed', async () => {
      render(<TodoPage />);
      const input = screen.getByTestId('test-input');
      fireEvent.change(input, { target: { value: 'todo 1' } });
      fireEvent.submit(screen.getByTestId('form'));

      await waitFor(async () => {
        const todo = screen.queryByText('todo 1');
        expect(todo).toBeInTheDocument();
        fireEvent.click(screen.getByTestId('toggle-done-btn'));

        await waitFor(() => {
          expect((todo as HTMLElement).className).toContain('line-through');
        });
      });
    });
  });

  test('create more than 1 todo', async () => {
    const { container } = render(<TodoPage />);

    const input = screen.getByTestId('test-input');
    fireEvent.change(input, { target: { value: 'todo 2' } });
    fireEvent.submit(screen.getByTestId('form'));

    await waitFor(() => {
      expect(container.getElementsByClassName('todo-content').length).toEqual(
        2
      );
    });
  });

  test('filter active todo', async () => {
    render(<TodoPage />);
    fireEvent.click(screen.getByTestId('label-active'));

    await waitFor(() => {
      expect(screen.queryByText('todo 1')).not.toBeInTheDocument();
    });
  });

  test('filter done todo', async () => {
    render(<TodoPage />);
    fireEvent.click(screen.getByTestId('label-done'));

    await waitFor(() => {
      expect(screen.queryByText('todo 1')).toBeInTheDocument();
      expect(screen.queryByText('todo 2')).not.toBeInTheDocument();
    });
  });

  test('filter all todos', async () => {
    const { container } = render(<TodoPage />);
    fireEvent.click(screen.getByTestId('label-active'));

    fireEvent.click(screen.getByTestId('label-all'));

    await waitFor(() => {
      expect(container.getElementsByClassName('todo-content').length).toEqual(
        2
      );
    });
  });
});
