import * as React from 'react'
import styled from 'styled-components'
import { Trans, useTranslation } from 'react-i18next'

type Techs = Object

const TechStack = () => {
  const {t, i18n} = useTranslation('stack')
  const technologies = Object.entries(t<Techs>('techs', { returnObjects: true }))
    .map((tech, i) => {
      return (
        <TechWrapper>
          <StyledHeader>{tech[0]}</StyledHeader>
          <StyledParagraph>
            {tech[1].map((p: React.ReactNode, i: number) => <Trans key={i}>{p}</Trans>)}
          </StyledParagraph>
        </TechWrapper>
      )
    })
  return (
    <StackWrapper>
      {technologies}
    </StackWrapper>
  )
}

const StackWrapper = styled.div`

`
const TechWrapper = styled.div`

`
const StyledHeader = styled.h3`

`
const StyledParagraph = styled.p`

`

export default TechStack