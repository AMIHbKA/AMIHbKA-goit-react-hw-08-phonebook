import styled from 'styled-components';

export const MobileMenuStyled = styled.div`
  @media screen and (min-width: 767px) {
    display: none;
  }

  @keyframes slideDown {
    from {
      transform: translateY(-300%);
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes slideUp {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-300%);
    }
  }

  .menu {
    position: absolute;
    z-index: 999;
    animation: slideDown 0.3s ease-in-out forwards;
    width: 100%;
    background-color: red;
  }

  .menu.hide {
    animation: slideUp 0.3s ease-in-out forwards;
  }
`;
