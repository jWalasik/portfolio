import React from 'react'
import Section from './Section'
import { Trans, useTranslation } from 'react-i18next'
import styled from 'styled-components'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  const {t} = useTranslation('contact')
  return (
    <Section id='contact'>
      <h2><Trans i18nKey='contact:header'></Trans></h2>

      <Trans i18nKey='contact:description'></Trans>

      <StatusWrapper>
        OPEN FOR JOB OFFERS
      </StatusWrapper>

      <ContactForm />
      
    </Section>
  )
}

const StatusWrapper = styled.div`

`

const FormWrapper = styled.form`

`

export default Contact