import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import { Todo } from '../model/Todo';
import TodoLine from './TodoLine';

describe('TodoLine component', () => {
  it('should render and handle buttons properly', () => {
    const callback = jest.fn();
    let item = new Todo('A', false);

    let getByText = render(<TodoLine item={item} onItemDelete={jest.fn()} onItemDone={callback} />).getByText;
    expect(getByText(/Done/i)).toBeInTheDocument();
    expect(callback).not.toHaveBeenCalled();

    item = new Todo('A', true);
    getByText = render(<TodoLine item={item} onItemDelete={callback} onItemDone={callback} />).getByText;
    expect(getByText(/Undo/i)).toBeInTheDocument();
    expect(callback).not.toHaveBeenCalled();
  });

  it('should handle item delete click', () => {
    const deleteCallback = jest.fn();
    const item = new Todo('Foo', false);

    const { getByTestId } = render(<TodoLine onItemDone={jest.fn()} onItemDelete={deleteCallback} item={item} />);
    const button = getByTestId('todo-delete-item');
    fireEvent.click(button);
    expect(deleteCallback).toHaveBeenCalledWith(item);
  });

  it('should handle item done/undo click', () => {
    let doneCallback = jest.fn();
    let item = new Todo('Foo', false);

    let { getByTestId } = render(<TodoLine onItemDone={doneCallback} onItemDelete={jest.fn()} item={item} />);
    let button = getByTestId('todo-done-button');
    fireEvent.click(button);
    expect(doneCallback).toHaveBeenCalledWith(item);

    doneCallback = jest.fn();
    item = new Todo('Foo', true);

    getByTestId = render(<TodoLine onItemDone={doneCallback} onItemDelete={jest.fn()} item={item} />).getByTestId;
    button = getByTestId('todo-undo-button');
    fireEvent.click(button);
    expect(doneCallback).toHaveBeenCalledWith(item);
  });
});
