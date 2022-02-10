import { Routes, Route, Navigate } from 'react-router-dom';

import Auth from './containers/Auth';
import Dashboard from './containers/Dashboard';

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Auth />} />
      <Route path="/register" element={<Auth />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
