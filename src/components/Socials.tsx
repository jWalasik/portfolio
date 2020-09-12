import React from 'react'
import {ReactComponent as Git} from '../assets/icons/github.svg'
import {ReactComponent as Codepen} from '../assets/icons/codepen.svg'
import {ReactComponent as Linked} from '../assets/icons/linkedin.svg'
import {ReactComponent as Codewars} from '../assets/icons/codewars.svg'
import styled from 'styled-components'

const Socials = () => {
  return (
    <SocialsWrapper>
      <Git />
      <Codepen />
      <Linked />
      <Codewars />
    </SocialsWrapper>
  )
}

const SocialsWrapper = styled.div`
  display: flex;
  margin-top: -15vh;
  
  svg {
    margin: ${({theme})=>theme.spacing.s};
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