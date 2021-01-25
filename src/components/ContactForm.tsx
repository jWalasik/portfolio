import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import FormInput from './FormInput'
import {ReactComponent as Mail} from '../assets/icons/mail.svg'

interface Fields {
  [key:string]: string
}

const initialValues = {
  email: '',
  message: '',
  name: '',
  subject: '',
  type: ''
}

const EmailForm = ({fields}: {fields: Fields}) => {
  useEffect(()=>{
    
  }, [])
  const [values, setValues] = useState<Fields>(initialValues)
  const [status, setStatus] = useState('SUBMIT')

  const formSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('Pending')
    fetch('/', {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: encode({'form-name': 'contact', ...values})
    })
      .then(res => {
        console.log(res)
        setStatus(res.statusText)
      })
      .catch(err => {
        console.log(err)
        setStatus(err.statusText)
      })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target
    setValues({...values, [name]:value})
  }
  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

  const inputs = Object.entries(fields).map(([key, label]) => {
    if(key !== 'submit') return (
      <FormInput 
        key={key}
        type={key} 
        label={label} 
        onChange={handleChange} 
        value={values[key]} />
    )
    else return null
  })
  console.log(status)
  return (
    <StyledForm data-netlify='true' name='contact' method='post'>
      <StyledAddress>
        <StyledIcon/>
        <a href="mailto:jacekwalasik89@gmail.com">
        
        jacekwalasik89@gmail.com</a>
      </StyledAddress>
      {inputs}
      <StyledButton onClick={formSubmit}>{fields.submit}</StyledButton>
    </StyledForm>
  )
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: center;
  width: 100%;
`
const StyledAddress = styled.address`
  display: flex;
  margin: ${({theme}) => theme.spacing.m};
  &> a {
    font-style: normal;
    text-decoration: none;
    color: ${({theme}) => theme.color.neon};
  }
`
const StyledIcon = styled(Mail)`
  height: 32px;
  fill: ${({theme}) => theme.color.neon};
  margin-right: ${({theme}) => theme.spacing.xs};
`

const StyledButton = styled.button`
  font-family: ${({theme})=>theme.font.accent};
  font-size: ${({theme})=>theme.fontSize.large};
  font-weight: 600;
  letter-spacing: ${({theme})=>theme.spacing.xs};
  color: ${({theme})=>theme.color.offwhite};
  background: ${({theme})=>theme.color.bgMain};
  min-width: 300px;
  height: 50px;
  border: 2px solid ${({theme})=>theme.color.neon};
  border-radius: 5px;
  transition: .3s ease;
  margin-top: ${({theme}) => theme.spacing.s};
  
  :hover{
    background: ${({theme})=>theme.color.neon};
    color: ${({theme})=>theme.color.bgMain};
  }
`

export default EmailForm