import React from 'react'
import styled, {StyledFunction} from 'styled-components'

interface Props {
  type: string,
  label: string,
  value: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput = ({type, label, value, onChange}: Props) => {
  return (
    <FieldWrapper>
      <label>{label}</label>
      <InputWrapper 
        as={type==='message'? 'textarea' : 'input'} 
        id={type}
        name={type}
        value={value}
        onChange={onChange}
        type='text'
      />
    </FieldWrapper>
  )
}

const InputWrapper = styled.input.attrs({
  type: 'text' || 'email'
})`

`
const FieldWrapper = styled.div`

`

export default FormInput