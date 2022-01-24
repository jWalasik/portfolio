import React from 'react'
import { Trans } from "react-i18next"
import styled from "styled-components"

interface HeadingProps {
  options?: any,
  i18nKey: string
}

const Heading: React.FC<HeadingProps> = ({i18nKey, options, children}) => {
  return (
    <HeadingWrapper>
      <TextWrapper><Trans i18nKey={i18nKey} /></TextWrapper>
      <Line />
      <IconWrapper>{children}</IconWrapper>
    </HeadingWrapper>
  )
}

const HeadingWrapper = styled.h2`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: ${({theme}) => theme.spacing.m};
`
const TextWrapper = styled.span`

`

const Line = styled.hr`
  flex-grow: .8;
`

const IconWrapper = styled.div`
  svg {
    height: 44px;
    width: 44px;
    fill: ${({theme}) => theme.color.neon}
  }
`

export default Heading