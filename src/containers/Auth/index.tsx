import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

import Form from '../../components/Form';
import Input from '../../components/Input';
import Header from '../../components/Header';
import Button from '../../components/Button';

import { useAuth } from '../../context/auth';

import { CredentialsType } from '../../types/auth';
import Text from '../../components/Text';

export default function Auth() {
  const { register } = useAuth();
  const { pathname } = useLocation();
  const [credentials, setCredentials] = useState<CredentialsType>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const isRegisterPage = pathname === '/register';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isRegisterPage && !credentials.name) {
      alert('Please insert name');
    } else if (!credentials.email) {
      alert('Please insert email');
    } else if (!credentials.password) {
      alert('Please insert password');
    } else if (
      isRegisterPage &&
      !(credentials.password === credentials.confirmPassword)
    ) {
      alert('Please insert matching passwords');
    } else {
      register(credentials);
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <Form handleSubmit={handleSubmit}>
        <Header>{isRegisterPage ? 'Register' : 'Login'}</Header>
        {isRegisterPage && (
          <Input
            name="name"
            placeholder="Name"
            handleChange={handleChange}
            value={credentials?.name}
          />
        )}

        <Input
          name="email"
          placeholder="Email"
          handleChange={handleChange}
          value={credentials?.email}
        />
        <Input
          name="password"
          placeholder="Password"
          handleChange={handleChange}
          value={credentials?.password}
        />
        {isRegisterPage && (
          <Input
            name="confirmPassword"
            placeholder="Confirm Password"
            handleChange={handleChange}
            value={credentials?.confirmPassword}
          />
        )}
        <Button>{isRegisterPage ? 'Register' : 'Login'}</Button>
        <Text
          withLink
          linkComponent={
            isRegisterPage ? (
              <Link to="/login">Login</Link>
            ) : (
              <Link to="/register">Register</Link>
            )
          }
        >
          Go to
        </Text>
      </Form>
    </div>
  );
}
