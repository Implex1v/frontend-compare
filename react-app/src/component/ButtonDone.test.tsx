import { fireEvent, render } from '@testing-library/react';
import ButtonDone from './ButtonDone';

describe('ButtonDone component', () => {
  it('should call callback on click', () => {
    const callback = jest.fn();

    const { getByText } = render(<ButtonDone onClick={callback} />);
    fireEvent.click(getByText(/Done/i));
    expect(callback).toHaveBeenCalled();
  });
});
