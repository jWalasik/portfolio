import React from 'react'
import { createGlobalStyle, ThemeProvider, keyframes } from 'styled-components'

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
  fontSize: {
    caption: '11px',
    body: '14px',
    large: '18px',
    h3: '22px',
    headline: '32px',
    subtitle: '60px',
    title: '92px'
  },
  line: {
    caption: '19px',
    body: '24px',
    large: '29px',
    h3: '37px',
    subtitle: '45px',
    title: '72px'
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
    mobileS: `(min-width: 320px)`,
    mobileM: `(min-width: 375px)`,
    mobileL: `(max-width: 425px)`,
    tablet: `(min-width: 768px)`,
    laptop: `(min-width: 1024px)`,
    desktop: `(min-width: 1440px)`,
    desktopL: `(min-width: 2560px)`
  }
}

export const Theme = ({children}: {children: React.ReactNode}) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)