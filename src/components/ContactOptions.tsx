import * as React from 'react'
import styled from 'styled-components'
import {ReactComponent as Mail} from '../assets/icons/mail.svg'
import {ReactComponent as LinkedIn} from '../assets/icons/linkedin.svg'
import {ReactComponent as Facebook} from '../assets/icons/facebook.svg'
const ContactOptions = () => {
  return (
    <StyledUL>
      <StyledLI>
        <LinkedIn/>
        Let's connect on LinkedIn!
      </StyledLI>
      <StyledLI>
        <Facebook/>
        <span>Got a question, some feedback or just want to say hi? Message me on Facebook!</span>
      </StyledLI>
      <StyledLI>
        <Mail/>
        <StyledAddress><a href="mailto:jacekwalasik89@gmail.com">jacekwalasik89@gmail.com</a></StyledAddress>
      </StyledLI>
    </StyledUL>
  )
}

const StyledUL = styled.ul`
  list-style: none;
  padding-left: 0;
`
const StyledLI = styled.li`
  display: flex;
  align-items: center;
  margin: ${({theme}) => theme.spacing.xs} 0;

  &> svg {
    height: 44px;
    padding: 4px;
    fill: ${({theme}) => theme.color.neon};
    margin-right: ${({theme}) => theme.spacing.xs};
  }
  &> span {
    width: calc(100% - 44px)
  }
`
const StyledAddress = styled.address`

  &>a {
    font-style: normal;
    text-decoration: none;
    color: ${({theme}) => theme.color.neon};
  }
`

export default ContactOptions