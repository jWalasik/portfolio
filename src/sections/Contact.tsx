import React, { useState } from 'react'
import Section from './Section'
import { Trans, useTranslation } from 'react-i18next'
import styled from 'styled-components'
import Loader from '../components/Loader'
import ContactForm from '../components/ContactForm'

import Status from '../components/Status'
import ContactOptions from '../components/ContactOptions'

interface Fields {
  [key:string]: string
}

const Contact = () => {
  const {t, i18n} = useTranslation('contact')
  const fields = t<Fields>('fields', { returnObjects: true })
  
  const [formActive, setFormActive] = useState(false)
  
  return (
    <Section id='contact'>
      <StyledHeader><Trans i18nKey='contact:header'></Trans></StyledHeader>
      <StyledParagraph><Trans i18nKey='contact:description'></Trans></StyledParagraph>
      
      <StyledDiv>
        <ContactOptions />
        <Status />       
      </StyledDiv>      

      <ContactForm fields={fields}/>      
    </Section>
  )
}

const StyledHeader = styled.h2`

`
const StyledParagraph = styled.p`

`
const StyledDiv = styled.div`
  display: flex;
  width: 100%;

  @media ${({theme}) => theme.breakpoints.mobileS} {
    flex-direction: column;
  }
`

export default Contact