import { cleanup, render, screen } from '@testing-library/react';

import List from '.';

describe('List Component', () => {
  let list: HTMLUListElement;
  let listItems: HTMLLIElement[];
  let checkboxes: HTMLInputElement[];

  beforeEach(() => {
    const sampleItems = [
      {
        id: '1',
        name: 'Todo 1',
        isComplete: false,
      },
      {
        id: '2',
        name: 'Todo 2',
        isComplete: false,
      },
      {
        id: '3',
        name: 'Todo 3',
        isComplete: false,
      },
    ];
    render(<List listItems={sampleItems} />);
    list = screen.getByRole('list');
    listItems = screen.getAllByRole('listitem');
    checkboxes = screen.getAllByRole('checkbox');
  });

  afterEach(() => {
    cleanup();
  });

  it('Renders correctly', () => {
    expect(list).toBeInTheDocument();
    expect(listItems).toHaveLength(3);
    expect(checkboxes).toHaveLength(3);
  });
});
