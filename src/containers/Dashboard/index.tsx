import Text from '../../components/Text';
import Button from '../../components/Button';
import Header from '../../components/Header';

import { useAuth } from '../../context/auth';

export default function Dashboard() {
  const { logout, user } = useAuth();

  return (
    <div>
      <Button handleClick={logout}>Logout</Button>
      <Header>Dashboard</Header>
      <Text>{`id: ${user?.id}`}</Text>
      <Text>{`email: ${user?.email}`}</Text>
      <Text>{`token: ${user?.token}`}</Text>
    </div>
  );
}
