import React from 'react'
import Section from './Section'
import { Trans, useTranslation } from 'react-i18next'
import styled from 'styled-components'

const About = () => {
  const {t} = useTranslation('about')
  return (
    <Section id='about'>
      <h2><Trans i18nKey='about:header'></Trans></h2>
      
      <Description>
        <Trans i18nKey='about:description.introduction'></Trans>
      </Description>

      <Description>
        <Trans i18nKey='about:description.experience'></Trans>
      </Description>

      <Description>
        <Trans i18nKey='about:description.skills'></Trans>
      </Description>

      <Description>
        <Trans i18nKey='about:description.goals'></Trans>
      </Description>
    </Section>
  )
}

const Description = styled.div`

`

export default About