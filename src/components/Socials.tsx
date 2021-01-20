import React from 'react'
import {ReactComponent as Git} from '../assets/icons/github.svg'
import {ReactComponent as Codepen} from '../assets/icons/codepen.svg'
import {ReactComponent as Linked} from '../assets/icons/linkedin.svg'
import {ReactComponent as Codewars} from '../assets/icons/codewars.svg'
import styled from 'styled-components'

const Socials = () => {
  return (
    <StyledDiv>
      <Git />
      <Codepen />
      <Linked />
      <Codewars />
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
    
  &>svg {
    margin: ${({theme})=>theme.spacing.m};
    margin-bottom: 150px;
    width: 44px;
    height: 44px;
    fill: ${({theme})=> theme.color.offwhite};

    &:hover{
      fill: ${({theme})=> theme.color.neon};
      cursor: pointer;
    }
  }
`

export default Socials