import React from 'react'
import Section from './Section'
import { Trans, useTranslation } from 'react-i18next'
import styled from 'styled-components'
import Bio from '../components/Bio'
import TechStack from '../components/TechStack'

const About = () => {
  const {t} = useTranslation('about')
  return (
    <Section id='about'>
      <h2><Trans i18nKey='about:header'></Trans></h2>

      <Bio />

      <TechStack />
      
      
    </Section>
  )
}

export default About