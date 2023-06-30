import { Form, Input, Label } from 'components/UI/Forms.styled';
import { styled } from 'styled-components';

export const ContactFormStyled = styled(Form)`
  display: flex;
  gap: 1em;
  border: none;
  width: auto;
  align-items: center;
`;

export const ContactInput = styled(Input)`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  animation: fadeIn 1s ease-in;

  &.filter {
    /* margin-block: 24px; */
    margin-inline: auto;
    width: 500px;
    text-align: center;
    box-shadow: ${props => props.theme.shadows.box};
  }
`;

export const ContactLabel = styled(Label)`
  display: flex;
  flex-direction: row;
  margin: 0;
  align-items: baseline;

  &:not(:first-child) {
    margin-top: 0;
  }
`;
