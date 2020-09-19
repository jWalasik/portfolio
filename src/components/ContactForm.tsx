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
  const [errors, setErrors] = useState({})
  const formSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('form submit')
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target
    setValues({...values, [name]:value})
  }
  return (
    <ContactFormWrapper onSubmit={formSubmit}>
      <AddressWrapper>
        <p>recipient:</p>
        <a href="mailto:jacekwalasik89@gmail.com">jacekwalasik89@gmail.com</a>
      </AddressWrapper>
      
      <InputWrapper>
        <label>from:</label>
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

      <InputWrapper>
        <label>name:</label>
        <input 
          id='name'
          onChange={handleChange}
          value={values.name}
          name='name'
          type='text'
          placeholder='What... is your name?'
        />
      </InputWrapper>

      <InputWrapper>
        <label>subject:</label>
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

      <InputWrapper>
        <label>message:</label>
        <textarea
          id='message'
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
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

`
const InputWrapper = styled.div`
  display: flex;
  background-color: ${({theme})=>theme.color.shadow};
  border-bottom: 1px solid ${({theme})=>theme.color.bgAction};

  label {
  }

  input {
    color: ${({theme})=>theme.color.offwhite};
    width: 100%;
    background-color: transparent;
    border: none;
    text-align: end;
    font-size: ${({theme})=>theme.fontSize.body};

    :invalid {
      color: ${({theme})=>theme.color.negative};
    }
  }

  textarea {
    width: 100%;
  }
`

const AddressWrapper = styled.address`
  display: flex;
  justify-content: center;
  align-items: center;

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