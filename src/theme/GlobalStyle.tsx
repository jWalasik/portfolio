import {createGlobalStyle} from 'styled-components'
import { ThemeType } from './Theme'

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  @font-face {
    font-family: 'Lato';
    font-weight: 100, 200, 300, 400, 600, 900;
    font-display: swap;
    font-style: normal;
    src: url('./fonts/lato.woff2') format('woff2');
  }
  @font-face {
    font-family: 'Titillium Web';
    font-style: normal;
    font-display: swap;
    font-weight: 100,200,300,400,600,900;
    src: url('./fonts/titillium-web.woff2') format('woff2')
  }
  * {
    box-sizing: border-box;
    
    outline: 0 !important;
  }
  html {
    scroll-behavior: smooth;
  }
  
  body, html {
    background-color: ${({theme}) => theme.color.bgMain};
    font-family: ${({theme}) => theme.font.body};
    font-size: ${({theme}) => theme.fontSize.body};
    font-weight: 100;
    line-height: ${({theme}) => theme.line.body};
    color: ${({theme}) => theme.color.offwhite};
  }
  
  strong {
    font-weight: 900;
  }

  a {
    text-decoration: none;
    color: ${({theme}) => theme.color.neon};
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus, 
  input:-webkit-autofill:active  {
    transition: background-color 5000s;
    -webkit-text-fill-color: #f7f7f7 !important;
  }
`

export default GlobalStyle