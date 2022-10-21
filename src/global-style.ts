import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    box-sizing: border-box;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  html {
    font-size: 6.25%; // 1rem = 1px
  }

  body {
    display: grid;
    place-items: center;
    height: 100vh;
    width: 100vw;
  }
`;
