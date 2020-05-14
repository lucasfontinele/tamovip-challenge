import { createGlobalStyle } from 'styled-components';

import fontFaces from './fonts';

export default createGlobalStyle`
  ${fontFaces};

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;

    ::-webkit-scrollbar-track {
      background-color: transparent;
    }

    ::-webkit-scrollbar {
      width: 6px;
      background: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background: #dad7d7;
      border-radius: 3px;
    }
  }

  html {
    font-size: 10px;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    width: 100%;
    display: block;
    font-weight: 400;
    font-size: 1.5rem;
    background-color: #fff;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: 'GT Walsheim Pro Regular', sans-serif !important;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none
  }

  input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  input[type=number] {
    -moz-appearance: textfield;
    appearance: textfield;
  }
`;
