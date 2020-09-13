import React, { useContext, useMemo } from 'react'
import styled from 'styled-components'
import { ScrollContext } from '../ctx/Scroll'

const Section = ({id, children} : {id: string, children: React.ReactNode}) => {
  const {addRef} = useContext(ScrollContext)
  const ref = useMemo(()=>addRef(id), [id])
  
  return (
    <SectionWrapper ref={ref} id={id} >
      {children}
    </SectionWrapper>
  )
}

const SectionWrapper = styled.section`
  border: 1px solid blue;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-size: ${({theme})=>theme.fontSize.body};
  margin: ${({theme})=>theme.spacing.m};

  h2 {
    font-size: ${({theme})=>theme.fontSize.subtitle};
    color: ${({theme})=>theme.color.neon};
    font-family: ${({theme})=>theme.font.fontSpecial};
    font-weight: 200;
  }
`

export default Section