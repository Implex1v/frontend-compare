import { fireEvent, render } from '@testing-library/react';
import TodoAdd from './TodoAdd';

describe('TodoAdd component', () => {
  it('should call callback on click', () => {
    const callback: (item: string) => void = jest.fn();
    const value = 'nuss';

    const { getByText, getByTestId } = render(<TodoAdd addTodoHandler={callback} />);
    fireEvent.change(getByTestId('todo-input'), { target: { value: value } });
    fireEvent.click(getByText(/Add/i));
    expect(callback).toHaveBeenCalledWith(value);
  });

  it('should not call callback when input empty', () => {
    const callback: (item: string) => void = jest.fn();
    const { getByText, getByTestId } = render(<TodoAdd addTodoHandler={callback} />);

    fireEvent.change(getByTestId('todo-input'), { target: { value: '' } });
    fireEvent.click(getByText(/Add/i));
    expect(callback).not.toHaveBeenCalled();
  });
});
