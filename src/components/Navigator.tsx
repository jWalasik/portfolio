import React, { useContext } from 'react'
import styled from 'styled-components'
import { Trans } from 'react-i18next'
import {ScrollContext} from '../ctx/Scroll'

import {ReactComponent as Mail} from '../assets/icons/mail.svg'
import {ReactComponent as About} from '../assets/icons/person.svg'
import {ReactComponent as Projects} from '../assets/icons/projects.svg'

const Navigator = () => {
  const ctx = useContext(ScrollContext)

  return (
    <NavWrapper>
      <ul>
        <li onClick={ctx.scrollTo} className={ctx.activeLink === 'projects' ? 'active' : undefined} id='projects'>
          <Projects className='icon'/>
          <Trans i18nKey='nav:projects' ></Trans>     
        </li>

        <li onClick={ctx.scrollTo} className={ctx.activeLink === 'about' ? 'active' : undefined} id='about'>
          <About className='icon'/>
          <Trans i18nKey='nav:about' ></Trans>          
        </li>

        <li onClick={ctx.scrollTo} className={ctx.activeLink === 'contact' ? 'active' : undefined} id='contact'>
          <Mail className='icon'/>
          <Trans i18nKey='nav:contact' ></Trans>          
        </li>
      </ul>
    </NavWrapper>
  )
}

const NavWrapper = styled.nav`
  cursor: pointer;
  height: 50px;
  margin-left: auto;
  font-family: ${({theme})=>theme.font.accent};
  letter-spacing: 2px;
  justify-content: space-around;
  align-items: center;

  @media ${({theme}) => theme.breakpoints.mobileS} {

  }
  ul {
    display: flex;
    list-style: none;
    margin: 0;
  }

  li {
    height: 44px;
    margin: 3px 5px 3px 5px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .active {
    color: ${({theme})=>theme.color.neon};
  }
  
  .icon {
    fill: ${({theme})=>theme.color.offwhite};
    margin: auto;
    width: 20px;
    margin-right: 3px;
  }
`

export default Navigator