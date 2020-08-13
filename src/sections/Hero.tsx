import React from 'react'
import Section from './Section'
import styled from 'styled-components'

const H2 = styled.h2`
  font-family: 'Lato';
`

const Hero = () => {
  return (
    <Section id='hero'>
      <h1>JACEK WALASIK</h1>
      <H2>Web Developer</H2>
      <p>in training</p>

      <div>
        ICONS
        <link rel="stylesheet" href=""/>
      </div>
    </Section>
  )
}

export default Hero