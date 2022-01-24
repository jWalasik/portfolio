import React, { useContext, useMemo } from 'react'
import styled from 'styled-components'
import { ScrollContext } from '../../ctx/Scroll'

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
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-size: ${({theme}) => theme.fontSize.body};
  line-height: ${({theme}) => theme.line.body};
  box-sizing: border-box;
  overflow: hidden;
  padding: ${({theme}) => theme.spacing.m};

  @media ${({theme}) => theme.breakpoints.desktop} {
    padding: ${({theme}) => theme.spacing.xl};
  }
  @media ${({theme}) => theme.breakpoints.tablet} {
    padding: ${({theme}) => theme.spacing.l};
  }
  @media ${({theme}) => theme.breakpoints.mobile} {
    padding: ${({theme}) => theme.spacing.s};
  }
`

export default Section