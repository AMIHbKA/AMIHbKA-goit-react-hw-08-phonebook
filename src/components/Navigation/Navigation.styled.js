import { styled } from 'styled-components';

export const NavigationStyled = styled.nav`
  display: flex;
  gap: 1rem;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;
