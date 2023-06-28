import { Navigation, UserMenu, AuthNav } from 'components/index';
import { Container } from 'components/UI/Container/Container';
import { useAuth } from 'hooks/useAuth';
import { Header } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <Container flex jc="space-between" ai="baseline">
        {/* <h1>PhoneBook</h1> */}
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Container>
    </Header>
  );
};
