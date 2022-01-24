import React from 'react'
import { GithubIcon, CodepenIcon, LinkedinIcon, CodewarsIcon } from '../../assets/icons/icons'
import styled from 'styled-components'

const Socials = () => {
  return (
    <StyledDiv>
      <GithubIcon />
      <CodepenIcon />
      <LinkedinIcon />
      <CodewarsIcon />
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  &>svg {
    width: 44px;
    height: 44px;
    fill: ${({theme})=> theme.color.offwhite};
    opacity: .7;

    &:hover{
      fill: ${({theme})=> theme.color.neon};
      cursor: pointer;
      opacity: 1;
      filter: url(#glow);
    }
  }
  @media ${({theme}) => theme.breakpoints.desktop} {
    grid-area: 3/1/6/1;
  }
  @media ${({theme}) => theme.breakpoints.tablet} {
    grid-area: 4/1/6/1;
  }
  @media ${({theme}) => theme.breakpoints.mobile} {
    grid-area: 4/2/6/3;
    flex-direction: row;
    
    &>svg {
      width: 36px;
      height: 36px;
    }
  }
`

export default Socials