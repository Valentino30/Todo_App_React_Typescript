import { cleanup, render, screen } from '@testing-library/react';

import Checkbox from '.';

describe('Checkbox Component', () => {
  let checkbox: HTMLInputElement;

  beforeEach(() => {
    render(<Checkbox checked={true} />);
    checkbox = screen.getByRole('checkbox');
  });

  afterEach(() => {
    cleanup();
  });

  it('Renders correctly', () => {
    expect(checkbox).toBeInTheDocument();
  });
});
