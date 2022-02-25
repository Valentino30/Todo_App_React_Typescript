import { cleanup, render, screen } from '@testing-library/react';

import ListItem from '.';

describe('ListItem Component', () => {
  let listItem: HTMLLIElement;
  let checkbox: HTMLInputElement;

  beforeEach(() => {
    const sampleItem = {
      id: '1',
      name: 'Todo 1',
      isComplete: false,
    };
    render(<ListItem listItem={sampleItem} />);
    listItem = screen.getByRole('listitem');
    checkbox = screen.getByRole('checkbox');
  });

  afterEach(() => {
    cleanup();
  });

  it('Renders correctly', () => {
    expect(listItem).toBeInTheDocument();
    expect(checkbox).toBeInTheDocument();
  });
});
