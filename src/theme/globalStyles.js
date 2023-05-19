import { createGlobalStyle } from 'styled-components'
import { backgroundColor, fontFamily, secondary } from './index'

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: ${fontFamily};
    margin: 0;
    padding: 0;
    background-color: ${backgroundColor};
    color: ${secondary};
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
` 