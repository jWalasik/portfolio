import React from 'react'
import { ThemeProvider } from 'styled-components'

export type ThemeType = typeof theme

const theme = {
  color: {
    bgMain: 'rgb(25, 27, 25)',
    bgNegative: 'rgb(197, 231, 208)',

    offwhite: 'rgb(230, 230, 230)',
    neon: 'rgb(40, 255, 40)',
    textSpecial: 'rgb(40, 200, 40)',
    negative: 'rgb(240, 65, 71)',

    action: 'rgb(40, 255, 40)',
    actionDark: `rgba(0, 255, 0, 0.5)`,
    actionLight: ``,

    shadow: `rgba(0,0,0,.5)`,
    glow: `rgba(255, 255, 255, 0.5)`,
  },
  font: {
    body: `'Lato', sans-serif`,
    accent: `'Titillium Web', sans-serif`
  },
  //rem set to 18px, defined at GlobalStyle
  fontSize: {
    caption: 'clamp(14px, 14px + 1vw, 18px)',
    body: 'clamp(16px, 16px + 1vw, 22px)',
    large: 'clamp(23px, 1.333rem, 29px)',
    headline: 'clamp(25px, 2rem, 35px)',
    subtitle: 'clamp(28px, 5vw, 40px)',
    title: 'clamp(47px, 8vw, 80px)'
  },
  line: {
    caption: `clamp(21px, , 24px)`,
    body: '1.5rem',
    large: `${1.5*1.333}rem`,
    headline: `${1.5*1.889}rem`,
  },
  spacing: {
    xs: 'clamp(2px, 0.4vw, 8px)',
    s: 'clamp(8px, 0.75vw, 13px)',
    m: 'clamp(13px, 1.15vw, 21px)',
    l: 'clamp(21px, 1.9vw, 34px)',
    xl: 'clamp(34px, 3.05vw, 55px)',
    lineHeight: 1.6
  },
  breakpoints: {
    mobile: `screen and (max-width: 425px)`,
    tablet: `screen and (min-width: 426px) and (max-width: 1024px)`,
    desktop: `screen and (min-width: 1024px)`,
    // mobileM: `screen and (min-width: 320px) and (max-width: 375px)`,
    // mobileL: `screen and (min-width: 375px) and (max-width: 425px)`,
    // tablet: `screen and (min-width: 425px) and (max-width: 768px)`,
    // laptop: `screen and (min-width: 768px) and (min-width: 1024px)`,
    // desktop: `screen and (min-width: 1024px) and (min-width: 1440px)`,
    // desktopL: `screen and (min-width: 2560px)`
  },
  animation: {
    fade: `
      {
        to {
          opacity: 0;
        }
      }      
    `,
    humm: `
    {to: {opacity: 0.6}}
    `
  }
}

export const Theme = ({children}: {children: React.ReactNode}) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)