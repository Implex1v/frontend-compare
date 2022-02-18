import { fireEvent, render } from "@testing-library/react";
import TodoApp from "./App";
import { LocalStore } from "../logic/Storage";
import { instance, It, mock, verify, when } from "strong-mock";
import { Todo } from "../model/Todo";
import '@testing-library/jest-dom'

describe('TodoApp', () => {
  it('should render todo items', () => {
    const items = [
      new Todo("FOO", false),
      new Todo("BAR", false),
    ];

    const builder = mock<LocalStore>();
    when(builder.load()).thenReturn(items);
    const store = instance(builder);
    const { getByText, getByTestId } = render(<TodoApp storage={store} />);

    verify(builder);
    expect(getByText(/FOO/i)).toBeInTheDocument();
    expect(getByText(/BAR/i)).toBeInTheDocument();
    expect(getByText(/Add/i)).toBeInTheDocument();
    expect(getByTestId('todo-input')).toBeInTheDocument();
  });

  it('should add a new todo item and delete it', () => {
    const items: Todo[] = [];
    const item: Todo[] = [new Todo("FOO", true)];

    const builder = mock<LocalStore>();
    when(builder.load()).thenReturn(items);
    when(builder.store(It.isArray())).thenReturn(item);
    when(builder.store(It.isArray())).thenReturn([]);
    const store = instance(builder);
    const { getByText, getByTestId, queryByText } = render(<TodoApp storage={store} />);

    fireEvent.change(getByTestId('todo-input'), { target: { value: 'FOO' } });
    fireEvent.click(getByText(/Add/i));
    expect(getByText(/FOO/i)).toBeInTheDocument();

    fireEvent.click(getByTestId('todo-delete-item'));
    verify(builder);
    expect(queryByText(/FOO/i)).toBe(null);
  });
});
