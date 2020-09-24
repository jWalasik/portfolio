import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {ReactComponent as Mail} from '../assets/icons/mail.svg'
import ContactForm from './ContactForm'
import FormInput from './FormInput'

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
  const [formActive, setFormActive] = useState(false)
  const [values, setValues] = useState<Fields>(initialValues || {})

  const formSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('form submit')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target
    console.log('name',name,'value', value)
    setValues({...values, [name]:value})
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
  })

  return (
    <>
      <Mail className='icon' onClick={()=>setFormActive(!formActive)} />
      {!formActive && 
        <FormWrapper>
          {inputs}
          <button>{fields.submit}</button>
        </FormWrapper>}
      
    </>
  )
}

const FormWrapper = styled.form`
  position: relative;
  top: 10vh;
`

export default EmailForm