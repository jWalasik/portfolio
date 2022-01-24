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
  font-size: ${({theme}) => theme.fontSize.headline};;
  font-weight: 100;
  letter-spacing: .225em;
`
const TextWrapper = styled.span`
  width: auto;
`

const Line = styled.hr`
  flex-grow: .8;

  @media ${({theme}) => theme.breakpoints.mobile} {
    display: none;
  }
`

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`

export default Heading