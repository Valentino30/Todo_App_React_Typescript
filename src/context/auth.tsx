import Cookies from 'js-cookie';
import { createContext, useContext, useEffect, useState } from 'react';

import {
  UserType,
  AuthContextType,
  AuthProviderProps,
  LoginCredentialsType,
  RegisterCredentialsType,
} from '../types/auth';
import { loginRequest, registerRequest } from '../api/auth';

const AuthContext = createContext({} as AuthContextType);

export const useAuth = () => {
  return useContext(AuthContext);
};

export default function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    const id = Cookies.get('id');
    const email = Cookies.get('email');
    const token = Cookies.get('token');

    if (id && email) {
      setUser({ email, id, token });
      setIsAuthenticated(true);
    }
  }, []);

  const register = (credentials: RegisterCredentialsType) => {
    setIsAuthenticating(true);
    registerRequest(credentials)
      .then((data) => {
        setUser(data);
        setIsAuthenticated(true);
        setIsAuthenticating(false);
        Cookies.set('token', data.token);
        Cookies.set('email', data.email);
        Cookies.set('id', data.id);
      })
      .catch((error) => {
        setIsAuthenticating(false);
        alert(error.response.data.error);
      });
  };

  const login = (credentials: LoginCredentialsType) => {
    setIsAuthenticating(true);
    loginRequest(credentials)
      .then((data) => {
        setIsAuthenticated(true);
        setIsAuthenticating(false);
        setUser(data);
      })
      .catch((error) => {
        setIsAuthenticating(false);
        alert(error.response.data.error);
      });
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    Cookies.remove('id');
    Cookies.remove('email');
    Cookies.remove('token');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        register,
        isAuthenticated,
        isAuthenticating,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
