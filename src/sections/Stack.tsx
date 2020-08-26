import React from 'react'
import Section from './Section'
import { Trans, useTranslation } from 'react-i18next'

const Stack = () => {
  const {t, i18n} = useTranslation('stack')
  const getTech = () => {
    
  }
  return (
    <Section id='stack'>
      <h2><Trans i18nKey='stack:header'></Trans></h2>
      <Trans i18nKey='stack:description'></Trans>
    </Section>
  )
}

export default Stack