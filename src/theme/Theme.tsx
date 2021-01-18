import React from 'react'
import { createGlobalStyle, ThemeProvider, keyframes } from 'styled-components'

export type ThemeType = typeof theme

const baseFontSize = 18

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
    caption: '0.875rem',
    body: '1rem',
    large: '1.333rem',
    headline: '1.889rem',
    subtitle: '3rem',
    title: '5.222rem'
  },
  line: {
    caption: `${1.5*0.875}rem`,
    body: '1.5rem',
    large: `${1.5*1.333}rem`,
    headline: `${1.5*1.889}rem`,
  },
  spacing: {
    xs: '0.8rem',
    s: '1.3rem',
    m: '2.1rem',
    l: '3.4rem',
    xl: '5.5rem',

    lineHeight: 1.6
  },
  breakpoints: {
    mobileS: `(max-width: 320px)`,
    mobileM: `(max-width: 375px)`,
    mobileL: `(max-width: 425px)`,
    tablet: `(max-width: 768px)`,
    laptop: `(min-width: 1024px)`,
    desktop: `(min-width: 1440px)`,
    desktopL: `(min-width: 2560px)`
  }
}

export const Theme = ({children}: {children: React.ReactNode}) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)