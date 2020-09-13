import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

import Navigator from './Navigator'

const Header = () => {
  const {i18n} = useTranslation()
  return (
    <HeaderWrapper >
      <span>jWalasik</span>

      <Navigator />
      
      <ButtonWrapper onClick={()=>i18n.changeLanguage(i18n.language==='en'?'pl':'en')} >
        {i18n.language==='en'?'PL':'EN'}
      </ButtonWrapper>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  background-color: ${({theme}) => theme.color.bgMain};
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  top: 0;

  span {
    margin-left:  ${({theme}) => theme.spacing.s};
    font-size: ${({theme}) => theme.fontSize.body};
  }
`

const ButtonWrapper = styled.button`
  height: 44px;
  background-color: ${({theme}) => theme.color.bgMain};
  color: ${({theme}) => theme.color.neon};
  font-size: 20px;
  border: none;
  cursor: pointer;
  margin-right:  ${({theme}) => theme.spacing.s};
`

export default Header