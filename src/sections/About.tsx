import React from 'react'
import Section from './Section'
import { Trans } from 'react-i18next'

const About = () => {
  //const {t} = useTranslation('about')
  return (
    <Section id='about'>
      <h2><Trans i18nKey='about:header'></Trans></h2>

      <Trans i18nKey='about:description.introduction'></Trans>
      <Trans i18nKey='about:description.experience'></Trans>
      <Trans i18nKey='about:description.skills'></Trans>
      <Trans i18nKey='about:description.goals'></Trans>
    </Section>
  )
}

export default About