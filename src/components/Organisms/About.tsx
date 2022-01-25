import React from 'react'
import Section from '../Atoms/Section'
import { Trans, useTranslation } from 'react-i18next'
import styled from 'styled-components'
import Bio from './Bio'
import TechStack from './TechStack'
import Heading from '../Molecules/Heading'
import IconLink from '../Atoms/Icon'

const About = () => {
  const {t} = useTranslation('about')
  return (
    <Section id='about'>
      <Heading i18nKey='about:header'><IconLink href={process.env.PUBLIC_URL + '/pdfs/Jacek_Walasik_Resume_Dev.pdf'} variant='resume'/></Heading>
      <Bio />
      <TechStack />
    </Section>
  )
}

export default About