import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

import Navigator from './Navigator'

const Header = () => {
  const {i18n} = useTranslation()
  const [shown, setShown] = useState(true)
  const [previous, setPrevious] = useState(0)

  const handleScroll = () => {
    if(previous < window.pageYOffset) {
      setShown(false)
    } else if (!shown) {
      setShown(true)
    }
    setPrevious(window.pageYOffset)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [previous, shown])

  return (
    <HeaderWrapper shown={shown}>
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

const HeaderWrapper = styled.header.attrs(props => {
})`
  background-color: ${({theme}) => theme.color.shadow};
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  top: ${props => props.shown ? 0 : '-350px'};
  z-index: 10;
  transition: all .2s ease-out;
  
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