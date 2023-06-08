import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


  :root {
    --font-style: "Poppins", sans-serif;
    --font-accent: "Josefin Sans", sans-serif;
    --secondary-color: #FFBCDC;
    --accent-color: #80BBDC;
    --accent-font-color: black;
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
