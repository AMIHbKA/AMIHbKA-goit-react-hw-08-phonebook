const { styled } = require('styled-components');

export const ContactListStyled = styled.ul`
  margin: 0 auto;
  display: grid;
  grid-row-gap: 0.5em;
  max-width: 50em;
  box-shadow: ${props => props.theme.shadows.box};
  padding: 15px;
  border-radius: 5px;

  li {
    display: grid;
    grid-template-columns: 2em minmax(250px, 1fr) minmax(30px, 180px) 2em;
    grid-column-gap: 0.5em;
    align-items: baseline;
    word-wrap: break-word;
    color: ${props => props.theme.colors.secondary};

    span {
      font-weight: 500;
    }

    &:not(:last-child) {
      border-bottom: 1px solid black;
    }
  }
`;
