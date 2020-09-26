import React from 'react'
import { createGlobalStyle, ThemeProvider, keyframes } from 'styled-components'

export type ThemeType = typeof theme

const colors = {
  bgMain: '#222522',
}

const theme = {
  color: {
    bgMain: '#222522',
    bgNegative: '#c5e7d0',
    bgAction: '#339944',

    offwhite: '#f7f7f7',
    neon: '#28ff28',
    negative: '#f04147',

    action: '#28ff28',
    actionDark: `darken(bgMain, 25%)`,
    actionLight: `lighten(${function(this: any) {return this.color.action}}, 15%)`,

    shadow: `darken(${function(this: any) {return this.color.action}}, 60%)`,
    glow: `lighten(${function(this: any) {return this.color.action}}, 25%)`,
  },
  font: {
    fontBody: `'Lato', sans-serif`,
    fontSpecial: `'Titillium Web', sans-serif`
  },
  fontSize: {
    caption: '11px',
    body: '14px',
    large: '18px',
    h3: '23px',
    subtitle: '29px',
    headline: '37px'
  },
  line: {
    caption: '19px',
    body: '24px',
    large: '29px',
    h3: '37px',
    subtitle: '45px',
    headline: '57px'
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
    small: 400,
    medium: 800,
    desktop: 1400
  }
}

export const Theme = ({children}: {children: React.ReactNode}) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)