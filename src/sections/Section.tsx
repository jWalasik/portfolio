import React, { useContext, useMemo } from 'react'
import styled from 'styled-components'
import { ScrollContext } from '../ctx/Scroll'

const Section = ({id, className, children} : {id: string, className?: string, children: React.ReactNode}) => {
  const {addRef} = useContext(ScrollContext)
  const ref = useMemo(()=>addRef(id), [id])
  
  return (
    <SectionWrapper ref={ref} id={id} className={className}>
      {children}
    </SectionWrapper>
  )
}

const SectionWrapper = styled.section`
  //border: 1px solid blue;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-size: ${({theme})=>theme.fontSize.body};
  overflow: hidden;

  @media ${({theme}) => theme.breakpoints.desktop} {
    
  }
  @media ${({theme}) => theme.breakpoints.desktop} {
    
  }
  @media ${({theme}) => theme.breakpoints.desktop} {
    
  }
  @media ${({theme}) => theme.breakpoints.desktop} {
    
  }

  /* h2 {
    font-size: ${({theme})=>theme.fontSize.headline};
    color: ${({theme})=>theme.color.neon};
    font-family: ${({theme})=>theme.font.accent};
    font-weight: 200;
    margin: ${({theme}) => theme.spacing.l};
    margin-right: auto;
  } */
`

export default Section