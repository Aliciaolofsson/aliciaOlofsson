import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


  :root {
    --font-style: 'Archivo', sans-serif;
    --font-accent: "Josefin Sans", sans-serif;
    --secondary-color: #FFBCDC;
    --accent-color: rgba(255, 255, 255, 0.5);
    --accent-font-color: black;
    --decor-font-style: 'Spectral', serif;
  }

  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: var(--font-style);
}

a {
  text-decoration: none;
  
}

`;

export default GlobalStyle;
