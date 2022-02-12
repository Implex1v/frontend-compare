import ButtonDelete from './ButtonDelete';
import { fireEvent, render } from '@testing-library/react';

describe('ButtonDelete component', () => {
  it('should call callback on click', () => {
    const callback = jest.fn();

    const { getByText } = render(<ButtonDelete onClick={callback} />);
    fireEvent.click(getByText(/Delete/i));
    expect(callback).toHaveBeenCalled();
  });
});
