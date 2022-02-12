import { fireEvent, render } from '@testing-library/react';
import ButtonUndo from './ButtonUndo';

describe('ButtonUndo component', () => {
  it('should call callback on click', () => {
    const callback = jest.fn();

    const { getByText } = render(<ButtonUndo onClick={callback} />);
    fireEvent.click(getByText(/Undo/i));
    expect(callback).toHaveBeenCalled();
  });
});
