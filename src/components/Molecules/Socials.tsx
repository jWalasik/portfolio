import React from 'react'
import styled from 'styled-components'
import Icon from '../Atoms/Icon'

const Socials = () => {
  return (
    <StyledDiv>
      <Icon href={'https://github.com/elPaleniozord'} variant={'github'} />
      <Icon href={'https://codepen.io/elPaleniozord'} variant={'codepen'} />
      <Icon href={'https://www.linkedin.com/in/jacek-walasik-4453a2141/'} variant={'linked'} />
      <Icon href={'https://www.codewars.com/users/elPaleniozord'} variant={'codewars'} />
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  @media ${({theme}) => theme.breakpoints.desktop} {
    grid-area: 3/1/6/1;
  }
  @media ${({theme}) => theme.breakpoints.tablet} {
    grid-area: 4/1/6/1;
  }
  @media ${({theme}) => theme.breakpoints.mobile} {
    grid-area: 4/2/6/3;
    flex-direction: row;
  }
`

export default Socials