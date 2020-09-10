import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { Trans } from 'react-i18next'
import {ScrollContext} from '../ctx/Scroll'

const NavWrapper = styled.nav`
  cursor: pointer;
  height: 50px;
  
  
  .active {
    color: red;
  }
`

const Navigator = () => {
  const ctx = useContext(ScrollContext)

  return (
    <NavWrapper>
      <ul>
        <li onClick={ctx.scrollTo} className={ctx.active?.current === 'projects' ? 'active' : undefined} id='projects'><Trans i18nKey='nav:projects' ></Trans></li>

        <li onClick={ctx.scrollTo} className={ctx.active?.current === 'projects' ? 'active' : undefined} id='about'><Trans i18nKey='nav:about' ></Trans></li>

        <li onClick={ctx.scrollTo} className={ctx.active?.current === 'projects' ? 'active' : undefined} id='stack'><Trans i18nKey='nav:stack' ></Trans></li>

        <li onClick={ctx.scrollTo} className={ctx.active?.current === 'projects' ? 'active' : undefined} id='contact'><Trans i18nKey='nav:contact' ></Trans></li>
      </ul>
    </NavWrapper>
  )
}

export default Navigator