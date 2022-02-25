import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import Button from '.';

describe('Button Component', () => {
  let button: HTMLButtonElement;
  const handleClick = jest.fn();

  beforeEach(() => {
    render(<Button handleClick={handleClick}>Click Me</Button>);
    button = screen.getByRole('button', { name: /Click Me/i });
  });

  afterEach(() => {
    cleanup();
  });

  it('Renders correctly', () => {
    expect(button).toBeInTheDocument();
  });

  it('Calls handleClick prop when clicked', () => {
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
