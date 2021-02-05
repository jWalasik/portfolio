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
      <svg className='bottom' viewBox='0 0 100 100' fill='none'>
        <defs>
        <linearGradient id="fade" gradientUnits="userSpaceOnUse" 
          x1="0%" y1="5%" x2="25%" y2="6%" gradientTransform="rotate(-85)">
          <stop offset="0%" stopColor={'rgb(25, 27, 25)'} stopOpacity="0"/>
          <stop offset="40%" stopColor={'rgb(40, 255, 40)'} stopOpacity="1"/>
        </linearGradient>
        </defs>
        <polyline points='0,0, 100,0 100,20' stroke='url(#fade)' strokeWidth='2' vectorEffect='non-scaling-stroke'/>
      </svg>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  background-color: ${({theme}) => theme.color.shadow};
  position: sticky;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  top: 0;
  z-index: 10;
  /* border-bottom: 1px solid transparent;
  border-image: ${({theme}) => `linear-gradient(to left, ${theme.color.neon}, transparent)`};
  border-image-slice: 1;
  outline-offset: -5px; */
  
  /* :after {
    top: 100%;
    right: 2px;
    width: 100%;
    height: 50vh;
    content: '';
    position: absolute;
    border-right: 1px solid transparent;
    border-image: ${({theme}) => `linear-gradient(to bottom, ${theme.color.neon}, transparent)`};
    border-image-slice: 1;
    z-index: -1;
    pointer-events:none;
  } */
  .bottom {
    position: absolute;
    pointer-events: none;
    width: 100%;
    top: 50px;
    right: 5px;
  }
  @media ${({theme}) => theme.breakpoints.mobileL} {
    span {
      display:none;
    }
  }
  span {
    margin-left:  ${({theme}) => theme.spacing.s};
    font-size: ${({theme}) => theme.fontSize.body};
  }
`

const ButtonWrapper = styled.button`
  height: 44px;
  background-color: transparent;
  color: ${({theme}) => theme.color.neon};
  font-size: 16px;
  border: none;
  cursor: pointer;
  margin-right:  ${({theme}) => theme.spacing.s};
`

export default Header