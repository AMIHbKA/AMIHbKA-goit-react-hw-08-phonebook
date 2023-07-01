import { Navigation, UserMenu, AuthNav } from 'components/index';
import { Container } from 'components/UI/Container/Container';
import { useAuth } from 'hooks/useAuth';
import { Header } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <Container flex jc="space-between" ai="baseline">
        <Navigation />
        <h1>PhoneBook</h1>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Container>
    </Header>
  );
};
