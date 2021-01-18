import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
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
  useEffect(()=>{
    
  }, [])
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
    else return null
  })

  return (
    <StyledForm>
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