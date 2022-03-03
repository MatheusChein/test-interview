import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  span, p, button, h1, h2, a {
    font-family: 'Roboto';
  }

  a, button {
    transition: 0.2s;
  }

  a:hover, button:hover {
    cursor: pointer;
    filter: brightness(0.7);
  }
`