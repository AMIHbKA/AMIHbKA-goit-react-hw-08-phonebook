import { NavLinkStyled } from 'components/AuthNav/AuthNav.styled';
import { Wrapper } from 'components/UI/Wrapper/Wrapper';
import { useAuth } from 'hooks/useAuth';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Wrapper as="nav" flex gap="1em">
      <NavLinkStyled to="/">Home</NavLinkStyled>
      {isLoggedIn && <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>}
    </Wrapper>
  );
};
