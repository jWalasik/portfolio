import React from 'react'
import Section from './Section'
import { Trans, useTranslation } from 'react-i18next'
import Card from '../components/Card'
import styled from 'styled-components';

type Projects = Object[];

const Projects = () => {
  const {t, } = useTranslation('projects')
  const projects = t<Projects>('projects', {returnObjects: true})
  const list = projects.map((project, i) => {
    return <Card project={project} key={i} />
  })
  return (
    <Section id='projects'>
      <StyledHeader><Trans i18nKey='projects:header'></Trans></StyledHeader>
      <StyledParagraph>
        Welcome my humble gallery, showcasing projects I've been working on lately. 
        {/* <Trans i18nKey='projects:description'></Trans> */}
      </StyledParagraph>
      
      {list}
    </Section>
  )
}

const StyledHeader = styled.h2`

`

const StyledParagraph = styled.p`

`

export default Projects