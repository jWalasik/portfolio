import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { Trans } from 'react-i18next'
import {ScrollContext} from '../ctx/Scroll'

const NavWrapper = styled.nav`

`

const Navigator = () => {
  const ctx = useContext(ScrollContext)
  useEffect(()=>{
  }, [ctx])

  return (
    <NavWrapper>
      <ul>
        <li onClick={ctx.scrollTo} id='projects'><Trans i18nKey='nav:projects' >X</Trans></li>

        <li onClick={ctx.scrollTo} id='about'><Trans i18nKey='nav:about' ></Trans></li>

        <li onClick={ctx.scrollTo} id='stack'><Trans i18nKey='nav:stack' ></Trans></li>

        <li onClick={ctx.scrollTo} id='contact'><Trans i18nKey='nav:contact' ></Trans></li>
      </ul>
    </NavWrapper>
  )
}

export default Navigator