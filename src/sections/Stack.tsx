import React from 'react'
import Section from './Section'
import { Trans } from 'react-i18next'

const Stack = () => {
  return (
    <Section id='stack'>
      <h2><Trans i18nKey='stack:header'></Trans></h2>
      <Trans i18nKey='projects:description'></Trans>
    </Section>
  )
}

export default Stack