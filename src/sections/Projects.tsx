import React from 'react'
import Section from './Section'
import { Trans, useTranslation } from 'react-i18next'
import Card from '../components/Card'

type Projects = Object[];

const Projects = () => {
  const {t, i18n} = useTranslation('projects')
  const projects = t<Projects>('projects', {returnObjects: true})
  const list = projects.map((project, i) => {
    return <Card project={project} key={i} />
  })
  return (
    <Section id='projects'>
      <h2><Trans i18nKey='projects:header'></Trans></h2>
      <Trans i18nKey='projects:description'></Trans>
      {list}
    </Section>
  )
}

export default Projects