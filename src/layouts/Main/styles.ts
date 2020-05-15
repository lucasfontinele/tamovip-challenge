import styled from 'styled-components';

import background from '../../static/images/background.png';

export const Container = styled.main`
  height: 100%;
  width: 100%;

  ::after {
    content: '';
    height: 100vh;
    width: 100%;

    position: absolute;
    top: 0;
    background: url(${background}) no-repeat 15px 15px;

    z-index: -5;
  }
`;
