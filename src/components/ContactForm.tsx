import React, {useState} from 'react'
import styled from 'styled-components'

const initialValues = {
  email: '',
  message: '',
  name: '',
  subject: '',
  type: ''
}
const ContactForm = () => {
  const [values, setValues] = useState(initialValues || {})

  const formSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('form submit')
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target
    const error : any = document.getElementById(name)
    console.log(error.validationMessage)
    setValues({...values, [name]:value})
  }
  return (
    <ContactFormWrapper onSubmit={formSubmit}>
      <AddressWrapper>
        <a href="mailto:jacekwalasik89@gmail.com">jacekwalasik89@gmail.com</a>
      </AddressWrapper>
      
      <InputWrapper value={values.email}>
        <label htmlFor='email'>Email:</label>
        <input 
          id='email'
          onChange={handleChange}
          value={values.email}
          name='email'
          type='email'
          placeholder='Your Email Address'
          required
        />
      </InputWrapper>

      <InputWrapper value={values.name}>
        <label htmlFor='name'>Name:</label>
        <input 
          id='name'
          onChange={handleChange}
          value={values.name}
          name='name'
          type='text'
          placeholder='What... is your name?'
        />
      </InputWrapper>

      <InputWrapper value={values.subject}>
        <label htmlFor='subject'>Subject:</label>
        <input 
          id='subject'
          onChange={handleChange}
          value={values.subject}
          name='subject'
          type='text'
          placeholder='What... is your quest?'
          required
        />
      </InputWrapper>

      <InputWrapper value={values.message}>
        <label htmlFor='message'>Message:</label>
        <textarea
          id='message'
          minLength={10}
          onChange={handleChange}
          value={values.message}
          name='message'
          placeholder='What... is the airspeed velocity of an unladen swallow? '
          required
        />
      </InputWrapper>

      <ButtonWrapper>SEND MESSAGE</ButtonWrapper>
    </ContactFormWrapper>
  )
}

const ContactFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
  padding: 5px;
  border: 4px solid ${({theme})=>theme.color.neon};
`
const active = `
  top: -20px;
  font-size: 16px;
`
const InputWrapper = styled.div<{value: string}>`
  width: 100%;
  position: relative;
  margin: 16px;
  :focus-within{
    label {
      ${active}
    }
  }
 
  label {
    position: absolute;
    transition: .3s ease;
    left: 10px;
    top: 0;
    font-weight: 600;
    font-family: ${({theme})=>theme.font.fontSpecial};
    text-transform: uppercase;
    letter-spacing: 2px;
    ${props => props.value? active : ''}
  }
  
  input, textarea {
    width: 100%;
    font-family: ${({theme})=>theme.font.fontBody};
    font-size: ${({theme})=>theme.fontSize.body};
    border: 1px solid ${({theme})=>theme.color.offwhite};
    border-radius: 5px;
    background-color: black;
    color: ${({theme})=>theme.color.offwhite};
    padding: 5px;
    text-align: end;

    :invalid {
      border: 1px solid ${({theme})=>theme.color.negative};
    }
    :valid {
      border: 1px solid ${({theme})=>theme.color.neon};
    }
  }

  textarea {
    height: 25vh;
    box-sizing: border-box;
  }
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
  
  :hover{
    background: ${({theme})=>theme.color.neon};
    color: ${({theme})=>theme.color.bgMain};
  }
`

export default ContactForm