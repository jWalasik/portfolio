import { format } from "path";
import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Titillium Web';
    font-style: normal;
    src: url('./titillium-web.woff2') format('woff2')
  }
  @font-face {
    font-family: 'Lato';
    src: url('./lato.woff2') format('woff2');
  }
  body {
    background-color: none;
    font-family: 'Titillium Web'
  }
`

export default GlobalStyle