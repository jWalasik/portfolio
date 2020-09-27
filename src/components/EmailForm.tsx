import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {ReactComponent as Mail} from '../assets/icons/mail.svg'
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
  const [values, setValues] = useState<Fields>(initialValues)

  const formSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('form submit')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target
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
          <AddressWrapper>
            <a href="mailto:jacekwalasik89@gmail.com">jacekwalasik89@gmail.com</a>
          </AddressWrapper>
          {inputs}
          <ButtonWrapper onClick={formSubmit}>{fields.submit}</ButtonWrapper>
        </FormWrapper>}
      
    </>
  )
}

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: center;
  top: 10vh;
  width: 600px;
`

const AddressWrapper = styled.address`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  a {
    text-decoration: none;
    color: ${({theme})=>theme.color.neon}
  }  
`

const ButtonWrapper = styled.button`
  font-family: ${({theme})=>theme.font.fontSpecial};
  font-size: ${({theme})=>theme.fontSize.body};
  font-weight: 600;
  color: ${({theme})=>theme.color.offwhite};
  background: ${({theme})=>theme.color.bgMain};
  max-width: 300px;
  height: 50px;
  border: 2px solid ${({theme})=>theme.color.neon};
  border-radius: 5px;
  transition: .3s ease;
  
  :hover{
    background: ${({theme})=>theme.color.neon};
    color: ${({theme})=>theme.color.bgMain};
  }
`

export default EmailForm