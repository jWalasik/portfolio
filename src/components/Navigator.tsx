import React from 'react'
import styled from 'styled-components'
import { Trans } from 'react-i18next'

const NavWrapper = styled.nav`

`

const Navigator = () => {
  return (
    <NavWrapper>
      <Trans i18nKey='nav:projects' ></Trans>

      <Trans i18nKey='nav:about' ></Trans>

      <Trans i18nKey='nav:stack' ></Trans>

      <Trans i18nKey='nav:contact' ></Trans>
    </NavWrapper>
  )
}

export default Navigator