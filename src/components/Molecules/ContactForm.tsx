import React, {useEffect, useReducer, useState} from 'react'
import styled from 'styled-components'
import FormInput from './FormInput'
import {ReactComponent as Mail} from '../../assets/icons/mail.svg'

interface Fields {
  [key:string]: any
}

const initialValues = {
  email: {
    id: 'email',
    value: '',
    validation: {
      message: '',
      isReq: true,
      minLength: 0
    },
    touched: false,
    isValid: false
  },
  message: {
    id: 'message',
    value: '',
    validation: {
      message: '',
      isReq: true,
      minLength: 10
    },
    touched: false,
    isValid: false
  },
  name: {
    id: 'name',
    value: '',
    validation: {
      message: '',
      isReq: false
    },    
    touched: false,
    isValid: true
  },
  subject: {
    id: 'subject',
    value: '',
    validation: {
      message: '',
      isReq: true,
      minLength: 4
    },
    touched: false,
    isValid: false
  },
}

const EmailForm = ({fields}) => {
  const [values, setValues] = useState<Fields>(initialValues)
  // const [state, dispatch] = useReducer(reducer, initialValues, init)
  
  const formSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    //@ts-ignore
    // tslint:disable-next-line
    if(!Object.values(values).every(field => field.isValid)){
      console.log('invalid')
      return 
    }
    console.log('all valid')

    fetch('/', {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: encode({'form-name': 'contact', ...values})
    })
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value, validity} = e.target
    const update = values[name]
    update.value = value
    update.touched = true
    
    update.isValid = validity.valid
    let message = ''
    if(validity.tooShort) {
      message = `${name} is too short`
    } else if (validity.typeMismatch) {
      message = `${name} format is invalid`
    } else if (update.validation.isReq && update.value === '') {
      message = `${name} is required`
    }
    update.validation.message = message
    setValues({...values, [name]: update})
  }

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

  const inputs = Object.entries(fields).map(([key, label]: [string, string]) => {
    if(key !== 'submit') return (
      // @ts-ignore
      <FormInput 
        key={key} 
        label={label} 
        onChange={handleChange} 
        values={values[key]}
      />
    )
    else return null
  })

  return (
    <StyledForm data-netlify='true' name='contact' method='post'>
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