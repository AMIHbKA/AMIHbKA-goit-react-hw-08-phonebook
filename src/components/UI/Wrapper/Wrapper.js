import styled from 'styled-components';

export const Wrapper = styled.div`
  ${props => props.flex && `display: flex;`}
  ${props => props.gap && `gap: ${props.gap};`}
  ${props => props.ai && `align-items: ${props.ai};`}
  ${props =>
    props.boxshadow &&
    `box-shadow: ${props.boxshadow} || ${props => props.theme.shadow.box};`}

    ${props => props.border && `border: ${props.border};`}
    ${props => props.br && `border-radius: ${props.br};`}
    ${props =>
    props.h && `height: ${props.h};`} /* transform: translateY(-10%); */
`;
