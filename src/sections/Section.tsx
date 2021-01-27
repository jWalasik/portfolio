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
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-size: ${({theme}) => theme.fontSize.body};
  line-height: ${({theme}) => theme.line.body};
  overflow: hidden;
  padding-bottom: ${({theme}) => theme.spacing.l};

  @media ${({theme}) => theme.breakpoints.desktop} {
    margin: 0 10% 0 10%;
  }
  @media ${({theme}) => theme.breakpoints.tablet} {
    margin: 0 5% 0 5%;
  }
  @media ${({theme}) => theme.breakpoints.mobileL} {
    margin: 0 10px 0 10px
  }
  @media ${({theme}) => theme.breakpoints.mobileS} {
    margin: 3px;
  }

  h2 {
    font-size: ${({theme})=>theme.fontSize.headline};
    color: ${({theme})=>theme.color.neon};
    font-family: ${({theme})=>theme.font.accent};
    font-weight: 200;
    margin-right: auto;
  }
`

export default Section