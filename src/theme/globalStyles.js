import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: "Open Sans", sans-serif;
    margin: 0;
    padding: 0;
    background-color: aliceblue;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  header {
    background-color: blue;
  }
` 