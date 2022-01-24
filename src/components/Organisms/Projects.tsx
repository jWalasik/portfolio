import React from 'react'
import Section from '../Atoms/Section'
import { Trans, useTranslation } from 'react-i18next'
import styled from 'styled-components';
import Card from './Card';
import Heading from '../Molecules/Heading';

import {ReactComponent as GithubIcon} from '../../assets/icons/github.svg'

type Projects = Object[];

const Projects = () => {
  const {t, } = useTranslation('projects')
  const projects = t<Projects>('projects', {returnObjects: true})
  const list = projects.map((project, i) => <Card project={project} key={i} />)
  
  return (
    <Section id='projects'>
      <Heading i18nKey='projects:header'>
        <a href="https://github.com/elPaleniozord" ><GithubIcon /></a>
      </Heading>
      
      <StyledParagraph>
        <Trans i18nKey='projects:description'></Trans>
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