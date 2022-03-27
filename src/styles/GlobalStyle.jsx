import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body
  {
    background:#ddd;
  }

  *
  {
    margin:0;
    padding:0;
    outline:0;
    font-family:'Roboto', sans-serif;
    box-sizing:border-box;
  }
`;

export default GlobalStyle;
