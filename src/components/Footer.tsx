import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <FooterWrapper >Coded and designed by Jacek Walasik</FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  text-align: center;
  background-color: ${({theme}) => theme.color.shadow};
  padding: 2px;
  font-family: ${({theme}) => theme.font.accent};
  font-size: ${({theme}) => theme.fontSize.caption};
`

export default Footer