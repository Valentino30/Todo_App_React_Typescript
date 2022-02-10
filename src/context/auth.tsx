import { createContext, useContext, useState } from 'react';

import { AuthContextType, AuthProviderProps } from '../types/auth';

const AuthContext = createContext({} as AuthContextType);

export const useAuth = () => {
  return useContext(AuthContext);
};

export default function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated] = useState(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}
