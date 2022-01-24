import React, { useState } from 'react'
import Section from '../Atoms/Section'
import { Trans, useTranslation } from 'react-i18next'
import styled from 'styled-components'

import {ReactComponent as Linked} from '../../assets/icons/linkedin.svg'
import {ReactComponent as Mail} from '../../assets/icons/mail.svg'

import Status from '../Atoms/Status'
import ContactForm from '../Molecules/ContactForm'
import Heading from '../Molecules/Heading'

interface Fields {
  [key:string]: string
}

const Contact = () => {
  const {t, i18n} = useTranslation('contact')
  const fields = t<Fields>('fields', { returnObjects: true })
  
  const [formActive, setFormActive] = useState(false)
  
  return (
    <Section id='contact'>
      <Heading i18nKey='contact:header'>
        <a href=''><Linked /></a>
        <a href='mailto: jacekwalasik89@gmail.com'><Mail /></a>
      </Heading>
      {/* <StyledHeader>
        <Trans i18nKey='contact:header'></Trans>

      </StyledHeader> */}
      <StyledParagraph><Trans i18nKey='contact:description'></Trans></StyledParagraph>
      <Status />
      <ContactForm fields={fields}/>      
    </Section>
  )
}

const StyledHeader = styled.h2`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &>svg {
    width: 44px;
    height: 44px;
    fill: ${({theme})=> theme.color.neon};
    cursor: pointer;
    opacity: .5;
    transition: all .3s;
  }
  &>svg:hover {
    opacity: 1;
  }
`
const StyledParagraph = styled.p`
  width: 100%;
`

export default Contact