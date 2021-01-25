import * as React from 'react'
import styled from 'styled-components'
import { Trans, useTranslation } from 'react-i18next'

type Skills = Object

const Skills = () => {
  const {t, i18n} = useTranslation('stack')
  const technologies = Object.entries(t<Skills>('techs', { returnObjects: true }))
    .map((tech, i) => {
      return (
        <TechWrapper key={i}>
          <StyledHeader>{tech[0]}</StyledHeader>
          <StyledParagraph>
            {tech[1].map((p: React.ReactNode, i: number) => <Trans key={i}>{p}</Trans>)}
          </StyledParagraph>
        </TechWrapper>
      )
    })
  return (
    <SkillsWrapper>
      {technologies}
    </SkillsWrapper>
  )
}
const SkillsWrapper = styled.ul`
  list-style: none;
  padding: 0;
`
const TechWrapper = styled.li`

`
const StyledHeader = styled.h3`

`
const StyledParagraph = styled.p`

`

export default Skills