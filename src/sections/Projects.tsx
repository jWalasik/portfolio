import React from 'react'
import Section from './Section'
import { Trans, useTranslation } from 'react-i18next'

const Projects = () => {
  const {t} = useTranslation('projects')
  return (
    <Section id='projects'>
      <h2><Trans i18nKey='projects:header'></Trans></h2>
      <Trans i18nKey='projects:description'></Trans>
    </Section>
  )
}

export default Projects