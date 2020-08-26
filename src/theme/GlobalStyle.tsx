import {createGlobalStyle} from 'styled-components'
import { ThemeType } from './Theme'

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  @font-face {
    font-family: 'Lato';
    src: url('./fonts/lato.woff2') format('woff2');
  }
  @font-face {
    font-family: 'Titillium Web';
    font-style: normal;
    src: url('./fonts/titillium-web.woff2') format('woff2')
  }
  * {
    box-sizing: border-box;
    
    outline: 0 !important;
  }
  html {
    scroll-behavior: smooth;
  }
  
  body {
    background-color: ${({theme}) => theme.color.bgMain};
    font-family: ${({theme}) => theme.font.fontBody};
    overflow-x: hidden;
    color: ${({theme}) => theme.color.offwhite};
  }
`

export default GlobalStyle