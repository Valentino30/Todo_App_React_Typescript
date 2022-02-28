import { render } from '@testing-library/react';

import { TodoProvider } from '../context/todo';

export const renderWithContext = (Component: React.FC) => {
  render(
    <TodoProvider>
      <Component />
    </TodoProvider>
  );
};
