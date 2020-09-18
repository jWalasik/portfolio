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
        
        <button onClick={()=>setFormActive(!formActive)}><Loader><Mail className="icon"/></Loader></button>

        <Loader><Linkedin className="icon"/></Loader>
      </IconsWrapper>

      {!formActive && <ContactForm /> }

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
  min-height: 30vh;
  
  button {
    background-color: ${({theme})=>theme.color.bgMain};
    border: none;
  }
  
  .icon {
    position: absolute;
    width: 70%;
    fill: ${({theme})=>theme.color.neon};
  }
`

export default Contact