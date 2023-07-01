import { NavLinkStyled } from 'components/AuthNav/AuthNav.styled';
import { MobileMenu } from 'components/MobileMenu/MobileMenu';
import { useAuth } from 'hooks/useAuth';
import { NavigationStyled } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <NavigationStyled as="nav" flex gap="1em">
        <NavLinkStyled to="/">Home</NavLinkStyled>
        {!isLoggedIn && <NavLinkStyled to="/example">Example</NavLinkStyled>}
        {isLoggedIn && <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>}
      </NavigationStyled>
    </>
  );
};
