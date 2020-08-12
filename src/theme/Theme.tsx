import React from 'react'
import { ThemeProvider, keyframes } from 'styled-components'

const theme = {
  color: {
    bgMain: '#222522',
    bgNegative: '#c5e7d0',
    neon: 'rgb(40,255,40)',
  },
  font: {
    fontBody: `'Lato', sans-serif`,
    fontSpecial: `'Titillum Web', sans-serif`
  },
  fontSize: {
    caption: '1rem',
    body: '1.62rem',
    subtitle: '2.62rem',
    headline: '4.2464rem'
  },
  spacing: {

  }
}

export const Theme = ({children}: {children: React.ReactNode}) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)