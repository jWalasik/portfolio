import React from 'react'
import Section from './Section'
import { Trans } from 'react-i18next'

const Projects = () => {
  return (
    <Section id='projects'>
      <h2><Trans i18nKey='projects:header'></Trans></h2>
      <Trans i18nKey='projects:description'></Trans>
    </Section>
  )
}

export default Projects