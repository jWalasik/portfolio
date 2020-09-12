import React, { useContext } from 'react'
import styled from 'styled-components'
import { Trans } from 'react-i18next'
import {ScrollContext} from '../ctx/Scroll'

const Navigator = () => {
  const ctx = useContext(ScrollContext)

  return (
    <NavWrapper>
      <ul>
        <li onClick={ctx.scrollTo} className={ctx.activeLink === 'projects' ? 'active' : undefined} id='projects'><Trans i18nKey='nav:projects' ></Trans></li>

        <li onClick={ctx.scrollTo} className={ctx.activeLink === 'about' ? 'active' : undefined} id='about'><Trans i18nKey='nav:about' ></Trans></li>

        <li onClick={ctx.scrollTo} className={ctx.activeLink === 'stack' ? 'active' : undefined} id='stack'><Trans i18nKey='nav:stack' ></Trans></li>

        <li onClick={ctx.scrollTo} className={ctx.activeLink === 'contact' ? 'active' : undefined} id='contact'><Trans i18nKey='nav:contact' ></Trans></li>
      </ul>
    </NavWrapper>
  )
}

const NavWrapper = styled.nav`
  cursor: pointer;
  height: 50px;
  margin: 3px 15px 3px auto;

  ul {
    display: flex;
    list-style: none;
  }

  li {
    margin-left: 10px;
  }

  .active {
    color: ${({theme})=>theme.color.neon};
  }
`

export default Navigator