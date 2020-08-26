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
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setValues({...values, [name]:value})
  }
  return (
    <ContactFormWrapper onSubmit={formSubmit}>
      <address>
        <p>recipient:</p>
        <a href="mailto:jacekwalasik89@gmail.com">>jacekwalasik89@gmail.com</a>
      </address>
      
      <div>
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
      </div>

      <div>
        <label>name:</label>
        <input 
          id='name'
          onChange={handleChange}
          value={values.name}
          name='name'
          type='text'
          placeholder='What... is your name?'
        />
      </div>

      <div>
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
      </div>

      <div>
        <label>message:</label>
        <input 
          id='message'
          onChange={handleChange}
          value={values.message}
          name='message'
          type='text'
          placeholder='What... is your favourite colour? '
          required
        />
      </div>

      <button>Send Message</button>
    </ContactFormWrapper>
  )
}

const ContactFormWrapper = styled.form`

`

export default ContactForm