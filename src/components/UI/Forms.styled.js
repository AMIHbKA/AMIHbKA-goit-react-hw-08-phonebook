import styled from 'styled-components';

export const Form = styled.form`
  padding: 10px;
  margin-inline: auto;
  width: 500px;
  border: 1px solid ${props => props.theme.colors.secondary};
  border-radius: 5px;
  box-shadow: ${props => props.theme.shadows.box};
  font-size: ${props => props.theme.fontSize.text};

  button {
    display: block;
    margin-top: 1em;
    margin-inline: auto;
  }

  .icon {
    position: absolute;
    fill: ${props => props.theme.colors.secondary};
    width: 1.4em;
    height: 1.4em;
    top: calc(${props => props.theme.fontSize.text} * 2 - 5px);
    left: 0.2em;
  }
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: ${props => props.theme.colors.secondary};

  &:not(:first-child) {
    margin-top: 1em;
  }
`;

export const Input = styled.input`
  display: block;
  padding: 0.3em;
  border-radius: 5px;
  border: 1px solid ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.secondary};
  background-color: ${props => props.theme.colors.primary};
  outline: none;

  ${props => props.icon && `padding-left: 1.8em;`}
`;
