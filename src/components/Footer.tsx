import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <FooterWrapper >Coded and designed by JW</FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  text-align: center;
  background-color: ${({theme}) => theme.color.shadow};
  padding: ${({theme}) => theme.spacing.xs};
`

export default Footer