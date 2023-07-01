import { UserMenu, AuthNav, Navigation, MobileMenu } from 'components/index';
import { Container } from 'components/UI/Container/Container';
import { MainTitle } from 'components/UI/Title.styles';
import { useAuth } from 'hooks/useAuth';
import { Header } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <Container flex jc="space-between" ai="baseline">
        <Navigation />
        <MainTitle>PhoneBook</MainTitle>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Container>
      <MobileMenu />
    </Header>
  );
};
