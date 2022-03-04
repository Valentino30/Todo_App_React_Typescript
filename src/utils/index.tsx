import { render } from '@testing-library/react';
import AuthProvider from '../context/auth';

import { TodoProvider } from '../context/todo';

export const renderWithContext = (Component: React.FC) => {
  render(
    <AuthProvider>
      <TodoProvider>
        <Component />
      </TodoProvider>
    </AuthProvider>
  );
};
