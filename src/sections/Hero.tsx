import React from 'react'
import styled from 'styled-components'
import {ReactComponent as Title} from '../assets/title.svg'
import Socials from '../components/Socials'
import Section from './Section'
import {ReactComponent as Arrow} from '../assets/arrow.svg'

const Hero = () => {
  return (
    <HeroWrapper id='hero'>
      <StyledHeader>JACEK WALASIK</StyledHeader>
      <StyledSubtitle>WEB DEVELOPER</StyledSubtitle>
      <StyledSpan>in training</StyledSpan>
      <Socials />
      <StyledButton><StyledArrow /></StyledButton>
    </HeroWrapper>    
  )
}

const HeroWrapper = styled(Section)`
  height: 100vh;
  justify-content: space-around;
`
const StyledHeader = styled.h1`
  font-family: ${({theme}) => theme.font.accent};
  font-weight: 200;
  font-size: ${({theme}) => theme.fontSize.title};
  letter-spacing: 0.25em;
  color: ${({theme})=>theme.color.neon};
`
const StyledSubtitle = styled.h2`  
  //spcecificy boost
  && {
    font-weight: 100;
    font-size: ${({theme})=>theme.fontSize.subtitle};
    font-family: ${({theme})=>theme.font.body};
    letter-spacing: .225em;
    margin-right: 0;
    color: ${({theme})=>theme.color.offwhite};
  }
`
const StyledSpan = styled.span`
  font-size: 14px;
  color: #888888;
`
const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  margin: auto;
`
// way to use styles directly on imported component
const StyledArrow = styled(Arrow)`
  fill: none;
  stroke: ${({theme}) => theme.color.neon};
  stroke-width: 5;
  width: 44px;
  height: 70px;
`

export default Hero