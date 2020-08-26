import React from 'react'
import { createGlobalStyle, ThemeProvider, keyframes } from 'styled-components'

export type ThemeType = typeof theme

const theme = {
  color: {
    bgMain: '#222522',
    bgNegative: '#c5e7d0',
    bgAction: '#339944',

    offwhite: '#f7f7f7',
    neon: '#28ff28',

    action: '#28ff28',
    actionDark: `darken(${function(this: any) {return this.color.action}}, 25%)`,
    actionLight: `lighten(${function(this: any) {return this.color.action}}, 15%)`,

    shadow: `darken(${function(this: any) {return this.color.action}}, 60%)`,
    glow: `lighten(${function(this: any) {return this.color.action}}, 25%)`,
  },
  font: {
    fontBody: `'Lato', sans-serif`,
    fontSpecial: `'Titillium Web', sans-serif`
  },
  fontSize: {
    caption: '1rem',
    body: '1.62rem',
    subtitle: '2.62rem',
    headline: '4.2464rem'
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