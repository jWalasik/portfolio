import React from 'react'
import Section from '../Atoms/Section'
import { useTranslation } from 'react-i18next'
import Bio from './Bio'
import TechStack from './TechStack'
import Heading from '../Molecules/Heading'
import IconLink from '../Atoms/Icon'
import Skills from '../Molecules/Skills'

const About = () => {
  const {t} = useTranslation('about')
  return (
    <Section id='about'>
      <Heading i18nKey='about:header'><IconLink href={process.env.PUBLIC_URL + '/pdfs/Jacek_Walasik_Resume_Dev.pdf'} variant='resume'/></Heading>
      <Bio />
      <Skills />
    </Section>
  )
}

export default About