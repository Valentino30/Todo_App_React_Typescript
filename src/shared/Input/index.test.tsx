import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import Input from '.';

describe('Input Component', () => {
  let input: HTMLInputElement;
  const handleChange = jest.fn();
  const handleKeyDown = jest.fn();

  beforeEach(() => {
    render(
      <Input
        name={'email'}
        value={'vale@gmail.com'}
        placeholder={'Email'}
        handleChange={handleChange}
        handleKeyDown={handleKeyDown}
      />
    );
    input = screen.getByRole('textbox');
  });

  afterEach(() => {
    cleanup();
  });

  it('Renders correctly', () => {
    expect(input).toBeInTheDocument();
  });

  it('Calls handleChange prop when clicked', () => {
    fireEvent.change(input, { target: { value: 'a' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('Calls handleKeyDown prop when clicked', () => {
    fireEvent.keyDown(input);
    expect(handleKeyDown).toHaveBeenCalledTimes(1);
  });
});
