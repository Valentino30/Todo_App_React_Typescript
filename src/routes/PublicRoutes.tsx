import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '../context/auth';

export default function PublicRoutes() {
  const { isAuthenticated } = useAuth();
  if (isAuthenticated) return <Navigate to="/" />;
  return <Outlet />;
}
