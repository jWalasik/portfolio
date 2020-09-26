import React from 'react'
import styled from 'styled-components'
import {ReactComponent as Border} from '../assets/border.svg'

interface Props {
  type: string,
  label: string,
  value: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput = ({type, label, value='', onChange}: Props) => { //value set to empty string to prevent uncontrolled input warning
  return (
    <FieldWrapper>
      <InputWrapper 
        as={type==='message'? 'textarea' : 'input'} 
        id={type}
        name={type}
        value={value}
        onChange={onChange}
        type={'email'}
        minLength={type==='message' ? 10 : 0}
      />
      <StyledBorder id={`border-${type}`} />
      <LabelWrapper value={value}>{label}</LabelWrapper>      
    </FieldWrapper>
  )
}

const FieldWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 15px;
  padding-top: 15px;
`
const LabelWrapper = styled.label<Pick<Props, 'value'>>`
  position: absolute;
  top: 25px;
  left: 5px;
  transition: .3s ease;
  text-transform: uppercase;
  letter-spacing: 2px;
  ${props=>{
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
const InputWrapper = styled.input.attrs({
    type: 'email'
  })`
  background-color: rgba(0,0,0, 0.1);
  border: none;
  font-size: ${({theme})=>theme.fontSize.body};
  line-height: ${({theme})=>theme.line.body};
  color: ${({theme})=>theme.color.offwhite};
  padding: calc(${({theme})=>theme.fontSize.body} / 2);
  box-sizing: border-box;
  :invalid + svg {
    stroke: url(#faded-line-neg);
  }
`
const StyledBorder = styled(Border)`
  position: absolute;
  width: 100%;
  height: 80%;
  right: 0;
  bottom: 0;
  pointer-events: none;
  fill: transparent;
  overflow: visible;
  stroke: url(#faded-line);
  ${InputWrapper}:invalid & {
      border: 1px solid red;
    }
  
  #faded-line {
    --color-0: ${({theme})=> theme.color.bgMain};
    --color-100: ${({theme})=> theme.color.neon};
  }
  #faded-line-neg {
    --color-0: ${({theme})=> theme.color.bgMain};
    --color-100: ${({theme})=> theme.color.negative};
  }
`


export default FormInput