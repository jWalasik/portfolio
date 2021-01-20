import * as React from 'react'
import styled from 'styled-components'
import { Trans, useTranslation } from 'react-i18next'

const Bio = () => {
  const {t} = useTranslation('about')
  return (
    <BioWrapper>      
      <StyledParagraph>
        <Trans i18nKey='about:description.introduction'></Trans>
      </StyledParagraph>
      
      <StyledParagraph>
        <Trans i18nKey='about:description.experience'></Trans>
      </StyledParagraph>

      <StyledParagraph>
        <Trans i18nKey='about:description.skills'></Trans>
      </StyledParagraph>

      <StyledParagraph>
        <Trans i18nKey='about:description.goals'></Trans>
      </StyledParagraph>
    </BioWrapper>
  )
}

const BioWrapper = styled.div`

`

const StyledParagraph = styled.p`

`

export default Bio