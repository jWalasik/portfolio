import { url } from 'inspector'
import React from 'react'
import styled from 'styled-components'
import {ReactComponent as Border} from '../assets/bevel.svg'
import BeveledBorder from './BevelBorder'

interface Values {
  id: string,
  isValid: boolean,
  touched: boolean,
  value: string,
  validation: any
}
interface Props {
  type: string,
  label: string,
  values: Values,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

const FormInput = ({label, onChange, values: {id, isValid, touched, value='', validation}}: Props) => {
  return (
    <FieldWrapper isValid={touched && !isValid}>
      <InputWrapper
        as={id==='message' ? 'textarea' : 'input'} 
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        type={id==='email' ? 'email' : 'text'}
        minLength={validation.minLength}
        required={validation.isReq}
      />

      <BeveledBorder />
      <LabelWrapper isValid={touched && !isValid} value={value}>{validation.message !== '' && touched ? validation.message : label}</LabelWrapper>
    </FieldWrapper>
  )
}

const FieldWrapper = styled.div.attrs(props => {})`
  position: relative;
  width: 100%;
  margin-bottom: 15px;
  padding-top: 15px;
  
  & svg {
    stroke: ${props => !props.isValid ? `url(#faded-line)` : `url(#faded-line-neg)`};
    filter: url(#glow);

  #faded-line {
      --color-0: ${({theme})=> theme.color.bgMain};
      --color-100: ${({theme})=> theme.color.neon};
    }
    #faded-line-neg {
      --color-0: ${({theme})=> theme.color.bgMain};
      --color-100: ${({theme})=> theme.color.negative};
    }
  }

  textarea {
    height: 150px;
  }
`
const LabelWrapper = styled.label<Pick<Props, any>>`
  position: absolute;
  height: 100%;
  top: 25px;
  left: 5px;
  transition: .3s ease;
  text-transform: uppercase;
  letter-spacing: 2px;
  pointer-events: none;
  color: ${props => props.isValid ? props.theme.color.negative : ``};

  ${props =>{
    if(props.value!=='') return `
      top: 0;
      font-size: ${props.theme.fontSize.caption};
    `
  }}
  ${FieldWrapper}:focus-within & {
    font-size: ${({theme})=>theme.fontSize.caption};
    top: 0;
  }
`
const InputWrapper = styled.input.attrs(props => ({
  type: props.type
}))<any>`
  background-color: rgba(0,0,0, 0.1);
  border: none;
  font-size: ${({theme})=>theme.fontSize.body};
  line-height: ${({theme})=>theme.line.body};
  color: ${({theme})=>theme.color.offwhite};
  padding: calc(${({theme})=>theme.fontSize.body} / 2);
  box-sizing: border-box;
  width: 100%;
`

export default FormInput