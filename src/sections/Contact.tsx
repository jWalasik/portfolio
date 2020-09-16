import React, { useState } from 'react'
import Section from './Section'
import { Trans, useTranslation } from 'react-i18next'
import styled from 'styled-components'
import ContactForm from '../components/ContactForm'
import Loader from '../components/Loader'
import {ReactComponent as Mail} from '../assets/icons/mail.svg'
import {ReactComponent as Linkedin} from '../assets/icons/linkedin.svg'
import {ReactComponent as Facebook} from '../assets/icons/facebook.svg'

const Contact = () => {
  const {t} = useTranslation('contact')
  const [formActive, setFormActive] = useState(false)
  return (
    <Section id='contact'>
      <h2><Trans i18nKey='contact:header'></Trans></h2>
      <p><Trans i18nKey='contact:description'></Trans></p>

      <IconsWrapper>
        <Loader><Facebook className="icon"/></Loader>
        
        <Loader><Mail className="icon"/></Loader>
        <Loader><Linkedin className="icon"/></Loader>
      </IconsWrapper>

      <ContactForm />

      <StatusWrapper>
        CLOSED FOR JOB OFFERS
      </StatusWrapper> 
    </Section>
  )
}

const StatusWrapper = styled.div`
  color: ${({theme})=>theme.color.negative};

`

const IconsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  
  .icon {
    width: 80%;
    height: 80%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    fill: ${({theme})=>theme.color.neon};
  }
`

export default Contact