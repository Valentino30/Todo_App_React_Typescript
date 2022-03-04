import { apiCall } from '.';
import { LoginCredentialsType, RegisterCredentialsType } from '../types/auth';

export const registerRequest = async ({
  email,
  password,
}: RegisterCredentialsType) => {
  const response = await apiCall.post('/register', {
    email,
    password,
  });
  return response.data;
};

export const loginRequest = async ({
  email,
  password,
}: LoginCredentialsType) => {
  const response = await apiCall.post('/login', {
    email,
    password,
  });
  return response.data;
};
