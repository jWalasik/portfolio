import React from 'react'
import { ThemeProvider } from 'styled-components'

export type ThemeType = typeof theme

const theme = {
  color: {
    bgMain: 'rgb(25, 27, 25)',
    bgNegative: 'rgb(197, 231, 208)',
    bgAction: 'rgb(51, 153, 68)',

    offwhite: 'rgb(247, 247, 247)',
    neon: 'rgb(40, 255, 40)',
    negative: 'rgb(240, 65, 71)',

    action: 'rgb(40, 255, 40)',
    actionDark: ``,
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
    caption: 'clamp(14px, 16px, 18px)',
    body: 'clamp(16px, 16px + 1vw, 22px)',
    large: 'clamp(23px, 1.333rem, 29px)',
    headline: 'clamp(29px, 5vw, 35px)',
    subtitle: 'clamp(28px, 5vw, 43px)',
    title: 'clamp(47px, 9vw, 66px)'
  },
  line: {
    caption: `${1.5*0.875}rem`,
    body: '1.5rem',
    large: `${1.5*1.333}rem`,
    headline: `${1.5*1.889}rem`,
  },
  spacing: {
    xs: '0.4rem',
    s: '0.75rem',
    m: '1rem',
    l: '1.6rem',
    xl: '2.55rem',

    lineHeight: 1.6
  },
  breakpoints: {
    mobileS: `screen and (max-width: 320px)`,
    mobileM: `screen and (min-width: 320px) and (max-width: 375px)`,
    mobileL: `screen and (min-width: 375px) and (max-width: 425px)`,
    tablet: `screen and (min-width: 425px) and (max-width: 768px)`,
    laptop: `screen and (min-width: 768px) and (min-width: 1024px)`,
    desktop: `screen and (min-width: 1024px) and (min-width: 1440px)`,
    desktopL: `screen and (min-width: 2560px)`
  }
}

export const Theme = ({children}: {children: React.ReactNode}) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)