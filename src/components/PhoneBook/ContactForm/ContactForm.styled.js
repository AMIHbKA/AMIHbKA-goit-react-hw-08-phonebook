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

  &.error {
    border-width: 2px;
    border-color: ${props => props.theme.colors.error};
  }

  &.filter {
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
