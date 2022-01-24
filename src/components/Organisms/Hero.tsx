import React, { useContext, useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import Socials from '../Molecules/Socials'
import Section from '../Atoms/Section'
import { ScrollContext } from '../../ctx/Scroll'
import Fader from '../Atoms/Fader'
import { Trans, useTranslation } from 'react-i18next'
import {Button as CTA } from '../Atoms/Button'
import BackgroundText from '../Atoms/BackgroundText'
import ScrollIndicator from '../Atoms/ScrollIndicator'

const Hero = () => {
  const ctx = useContext(ScrollContext)
  const {i18n} = useTranslation('hero')
  const [state, setState] = useState({
    current: 0,
    animation: 'in',
    titles: ['FULLSTACK DEVELOPER','BLOCKCHAIN ENTHUSIAST','ALGORITHMIC TRADER']
  })

  useEffect(() => {
    const timeout = setInterval(() => {
      const next = state.current === 2 ? 0 : state.current + 1 
        
      if(state.animation === 'in') setState({...state, animation: 'out'})
      else setState({...state, current: next, animation: 'in'})
    }, 2200)

    return () => clearInterval(timeout)
  }, [state])

  return (
    <HeroWrapper id='hero'>
      <StyledHeader>JACEK WALASIK</StyledHeader>

      <StyledFadeEffect out={state.animation === 'out'}>
        <StyledSubtitle>{state.titles[state.current]}</StyledSubtitle>
      </StyledFadeEffect>

      <StyledCTA id='projects' onClick={ctx.scrollTo}>
        <Trans i18nKey={'hero:cta'}>VIEW WORK</Trans>
      </StyledCTA>

      <Socials />

      <ScrollIndicator>
        <Trans i18nKey={'hero:scroll'}>SCROLL</Trans>
      </ScrollIndicator>

      <StyledBackgroundText>
        <Trans i18nKey={'hero:welcome'}>WELCOME</Trans>
      </StyledBackgroundText>
    </HeroWrapper>
  )
}

const HeroWrapper = styled(Section)`
  height: 100vh;
  display: grid;
  grid-template-columns: 10% 80% 10%;
  grid-template-rows: 15% 30% 15% 20% 20%;
  background: none;
  margin: 0;

  @media ${({theme}) => theme.breakpoints.mobile} {
    grid-template-rows: 15% 25% 15% 25% 20%;
    grid-template-columns: 0% 100% 0%;
  }
`
const StyledHeader = styled.h1`
  grid-area: 2/2/3/3;
  font-family: ${({theme}) => theme.font.accent};
  font-size: ${({theme}) => theme.fontSize.title};
  font-weight: 300;
  line-height: 125%;
  letter-spacing: .725rem;
  color: ${({theme})=>theme.color.neon};
  margin: 0;

  @media ${({theme}) => theme.breakpoints.desktop} {
    align-self: end;
  }
  @media ${({theme}) => theme.breakpoints.tablet} {
    align-self: end;
    grid-area: 2/1/3/3;
  }
  @media ${({theme}) => theme.breakpoints.mobile} {
    align-self: end;
  }
`

const StyledSubtitle = styled.h2`
  line-height: 100%;
  font-weight: 100;
  //spcecificy boost
  && {
    font-size: ${({theme})=>theme.fontSize.subtitle};
    font-family: ${({theme})=>theme.font.body};
    letter-spacing: .225em;
  }
`
const StyledFadeEffect = styled(Fader)`
  grid-area: 3/2/4/3;
  @media ${({theme}) => theme.breakpoints.desktop} {
    align-self: start;
  }
  @media ${({theme}) => theme.breakpoints.tablet} {
    align-self: start;
    grid-area: 3/1/4/3;
  }
  @media ${({theme}) => theme.breakpoints.mobile} {
    align-self: start;
  }
`

const StyledCTA = styled(CTA)`
  grid-area: 4/2/5/3;
  max-width: 300px;
  
  @media ${({theme}) => theme.breakpoints.desktop} {
    margin: 0;
  }
`

const StyledBackgroundText = styled(BackgroundText)`
  grid-area: 5/2/5/4;
  font-size: 14vw;
  text-align: right;
  align-self: end;
  margin-bottom: 2vw;
`


export default Hero