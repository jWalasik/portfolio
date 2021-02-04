import React from 'react'
import styled from 'styled-components'
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
  justify-content: center;
  text-align: center;
`
const StyledHeader = styled.h1`
  display: flex;
  font-family: ${({theme}) => theme.font.accent};
  font-size: ${({theme}) => theme.fontSize.title};
  line-height: 100%;
  letter-spacing: 0.25em;
  color: ${({theme})=>theme.color.neon};
`
const StyledSubtitle = styled.h2`  
  line-height: 100%;
  //spcecificy boost
  && {
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
  margin-left: 200px;
  margin-top: -25px;
`
const StyledButton = styled.button`
  position: absolute;
  background-color: transparent;
  border: none;
  bottom: ${({theme}) => theme.spacing.m};
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