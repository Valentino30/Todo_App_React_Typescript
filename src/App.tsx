import { Routes, Route, Navigate } from 'react-router-dom';

import AuthProvider from './context/auth';

import Auth from './containers/Auth';
import Dashboard from './containers/Dashboard';

import PublicRoutes from './routes/PublicRoutes';
import PrivateRoutes from './routes/PrivateRoutes';

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Dashboard />} />
        </Route>
        <Route element={<PublicRoutes />}>
          <Route path="/login" element={<Auth />} />
          <Route path="/register" element={<Auth />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </AuthProvider>
  );
}
