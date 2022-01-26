import React, { useState } from 'react'
import styled from 'styled-components'
import FormInput from './FormInput'
import Modal from './Modal'

interface Fields {
  [key:string]: any
}

interface Status {
  sending: boolean
  status: 'success' | 'failure' | undefined
  message: string
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
  const [state, setState] = useState<Status>({sending: false, status: undefined, message: ''})
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if(!Object.values(values).every(field => field.isValid)){
      return 
    } else {
      setState({...state, sending: true})

      fetch('/', {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: encode({'form-name': 'contact', ...values})
      })
      .then(res => {
        if(res.ok) {
          setState({
            sending: false, 
            status: 'success', 
            message: 'Thank you for reaching out, I usually respond in 1-2 work days.'})
        } 
        else throw new Error(res.status + " - " + res.statusText)
      })
      .catch(err => {
        console.log(err)
        setState({
          sending: false, 
          status: 'failure', 
          message: `${err}`})
      })
    }
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

  const handleModal = () => {
    setState({...state, status: undefined})
  }

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key].value))
      .join('&')
  }

  const inputs = Object.entries(fields).map(([key, label]: [string, string]) => {
    if(key !== 'submit') return (
      <FormInput 
        key={key}
        label={label}
        onChange={handleChange}
        values={values[key]} 
        type={key === 'email' ? 'email' : 'text'} 
      />
    )
    else return null
  })

  return (
    <>
      <StyledForm data-netlify='true' name='contact' method='POST' >
        {inputs}
        <StyledButton onClick={handleSubmit}>{state.sending ? 'SENDING' : fields.submit}</StyledButton>
      </StyledForm>
      
      <Modal show={state.status !== undefined} handler={handleModal}>
        <p>{state.message}</p>
      </Modal>
    </>

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