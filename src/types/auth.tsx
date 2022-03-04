export type UserType = {
  id?: string;
  email?: string;
  token?: string;
};

export type LoginCredentialsType = {
  email: string;
  password: string;
};

export type RegisterCredentialsType = LoginCredentialsType & {
  name: string;
  confirmPassword: string;
};

export type AuthContextType = {
  user: UserType | null;
  isAuthenticated: boolean;
  isAuthenticating: boolean;
  logout: () => void;
  login: (credentials: LoginCredentialsType) => void;
  register: (credentials: RegisterCredentialsType) => void;
};

export type AuthProviderProps = {
  children: React.ReactNode;
};
