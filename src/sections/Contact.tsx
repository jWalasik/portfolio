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
      <p><Trans i18nKey='contact:description'></Trans></p>

      <div>
        <StatusWrapper>
          CLOSED FOR JOB OFFERS
        </StatusWrapper>

        <ContactForm />
      </div>     
    </Section>
  )
}

const StatusWrapper = styled.div`
  color: ${({theme})=>theme.color.negative};
`

export default Contact