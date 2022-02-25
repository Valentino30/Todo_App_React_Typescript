import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import Form from '.';

describe('Form Component', () => {
  let form: HTMLFormElement;
  const handleSubmit = jest.fn();

  beforeEach(() => {
    render(<Form handleSubmit={handleSubmit} />);
    form = screen.getByRole('form');
  });

  afterEach(() => {
    cleanup();
  });

  it('Renders correctly', () => {
    expect(form).toBeInTheDocument();
  });

  it('Calls handleSubmit prop when clicked', () => {
    fireEvent.submit(form);
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
