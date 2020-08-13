import React from 'react'
import Section from './Section'
import { Trans, useTranslation } from 'react-i18next'

const Contact = () => {
  const {t} = useTranslation('contact')
  return (
    <Section id='contact'>
      <h2><Trans i18nKey='contact:header'></Trans></h2>

      <Trans i18nKey='contact:description'></Trans>
    </Section>
  )
}

export default Contact