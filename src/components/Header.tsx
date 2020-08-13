import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

import Navigator from './Navigator'

const HeaderWrapper = styled.header`
  border: 1px solid green;
  background-color: gray;
  position: fixed;
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const ButtonWrapper = styled.button`
  
`

const Header = () => {
  const {i18n} = useTranslation()
  return (
    <HeaderWrapper >
      jWalasik

      <Navigator />
      
      <ButtonWrapper onClick={()=>i18n.changeLanguage(i18n.language==='en'?'pl':'en')} >
        {i18n.language==='en'?'PL':'EN'}
      </ButtonWrapper>
    </HeaderWrapper>
  )
}

export default Header