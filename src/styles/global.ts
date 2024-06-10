import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };
    
  body {
    background-color: #FAFAFA;
    color: #181818;
    overflow-x: hidden;
  };

  body, input, button, textarea {
    font: 400 16px 'Roboto', sans-serif;
  };
`;