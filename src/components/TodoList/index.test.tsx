import { renderWithContext } from '../../utils';
import { cleanup, screen } from '@testing-library/react';

import TodoList from '.';

describe('TodoList Component', () => {
  let list: HTMLUListElement;
  let input: HTMLInputElement;
  let heading: HTMLHeadingElement;

  beforeEach(() => {
    renderWithContext(TodoList);
    list = screen.getByRole('list');
    input = screen.getByRole('textbox');
    heading = screen.getByRole('heading', { name: /Todos/i });
  });

  afterEach(() => {
    cleanup();
  });

  it('Renders correctly', () => {
    expect(list).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
  });
});
