import { cleanup, render, screen } from '@testing-library/react';

import Text from '.';

describe('Text Component', () => {
  let text: HTMLParagraphElement;

  beforeEach(() => {
    render(<Text>Read Me</Text>);
    text = screen.getByText('Read Me');
  });

  afterEach(() => {
    cleanup();
  });

  it('Renders correctly', () => {
    expect(text).toBeInTheDocument();
  });
});
