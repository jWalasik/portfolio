import React from 'react'
import Section from './Section'
import { Trans } from 'react-i18next'

const Contact = () => {
  return (
    <Section id='contact'>
      <h2><Trans i18nKey='contact:header'></Trans></h2>

      <Trans i18nKey='contact:description'></Trans>
    </Section>
  )
}

export default Contact