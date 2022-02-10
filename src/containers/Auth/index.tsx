import { useLocation } from 'react-router-dom';

export default function Auth() {
  const { pathname } = useLocation();

  return (
    <div>
      <h1>{pathname === '/register' ? 'Register' : 'Login'}</h1>
    </div>
  );
}
