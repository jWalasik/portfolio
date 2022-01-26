import styled from "styled-components"

interface ButtonProps {
  id?: string
  onClick: (e: Event) => void
}

export const Button = styled.button<ButtonProps>`
  font-family: ${({theme})=>theme.font.accent};
  font-size: ${({theme})=>theme.fontSize.body};
  font-weight: 600;
  letter-spacing: ${({theme})=>theme.spacing.xs};
  color: ${({theme})=>theme.color.offwhite};
  background: ${({theme})=>theme.color.bgMain};
  min-width: 250px;
  height: 50px;
  border: 2px solid ${({theme})=>theme.color.neon};
  border-radius: 5px;
  transition: .3s ease;
  margin: auto;
  z-index: 1;
  
  :hover{
    background: ${({theme})=>theme.color.neon};
    color: ${({theme})=>theme.color.bgMain};
  }
`

export default Button