import React from 'react'
import styled from 'styled-components'
import {ReactComponent as Title} from '../assets/title.svg'
import Socials from '../components/Socials'
import Section from './Section'

const Hero = () => {
  return (
    <Section id='hero'>
      <HeroWrapper>
        <h1>
          <Header />
        </h1>
        
        <SubtitleWrapper>
          <h2>WEB DEVELOPER</h2>
          <p>in training</p>
        </SubtitleWrapper>
              
        <Socials />
      </HeroWrapper>
    </Section>    
  )
}

const HeroWrapper = styled.header`
  height: calc(100vh);
  color: ${({theme}) => theme.color.neon};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  h1 {
    width: 50%;
    min-width: 600px;
    margin-top: 15vh;
  }
`
const SubtitleWrapper = styled.div`
  margin-top: -35vh;
  margin-bottom: -20vh;

  h2 {
    font-weight: 200;
    font-size: 7vh;
    font-family: ${({theme})=>theme.font.fontSpecial};
    letter-spacing: 7px;
    color: ${({theme})=>theme.color.offwhite};
    margin: 0;
  }

  p {
    font-size: 20px;
    color: #a7a8a7;
    margin: 0;
    float: right;
  }
`

const Header = styled(Title)`
  text-anchor: middle;
  fill: ${({theme}) => theme.color.bgMain};
  stroke: ${({theme}) => theme.color.neon};
  stroke-width: 0.001;
  font-size: 34px;
  font-family: 'Titillium Web', sans-serif;
  animation: draw 2s ease-in-out infinite;
  stroke-dasharray: 100%;
  stroke-dashoffset: 100%;
  filter: url(#glow);
  opacity: 0;

  @keyframes draw {
  100% {
    stroke-dashoffset: 0%;
    fill: ${({theme}) => theme.color.neon};
    opacity: 1;
    }
  }
`

export default Hero