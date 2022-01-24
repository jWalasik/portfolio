import React, { useState } from 'react'
import Section from '../Atoms/Section'
import { Trans, useTranslation } from 'react-i18next'
import styled from 'styled-components'
import Status from '../Atoms/Status'
import ContactForm from '../Molecules/ContactForm'
import Heading from '../Molecules/Heading'
import IconLink from '../Atoms/Icon'

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
        <IconLink href='https://www.linkedin.com/in/jacek-walasik-4453a2141/' variant='linked' />
        <IconLink href='mailto: jacekwalasik89@gmail.com' variant='mail' />
      </Heading>

      <StyledParagraph><Trans i18nKey='contact:description'></Trans></StyledParagraph>
      <Status />
      <ContactForm fields={fields}/>      
    </Section>
  )
}

const StyledParagraph = styled.p`
  width: 100%;
`

export default Contact