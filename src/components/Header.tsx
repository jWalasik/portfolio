import React from 'react'
import styled from 'styled-components'
import { Trans } from 'react-i18next'

import Navigator from './Navigator'

const HeaderWrapper = styled.header`
  border: 1px solid green;
  background-color: gray;
`

const ButtonWrapper = styled.button`

`

const Header = () => {
  return (
    <HeaderWrapper >
      jWalasik

      <Navigator />
      
      <ButtonWrapper>PL</ButtonWrapper>
    </HeaderWrapper>
  )
}

export default Header