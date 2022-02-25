import { cleanup, render, screen } from '@testing-library/react';

import Header from '.';

describe('Header Component', () => {
  let header: HTMLHeadingElement;

  beforeEach(() => {
    render(<Header>Read Me</Header>);
    header = screen.getByText('Read Me');
  });

  afterEach(() => {
    cleanup();
  });

  it('Renders correctly', () => {
    expect(header).toBeInTheDocument();
  });
});
