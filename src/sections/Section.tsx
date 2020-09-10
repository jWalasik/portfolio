import React, { useContext, useMemo } from 'react'
import styled from 'styled-components'
import { ScrollContext } from '../ctx/Scroll'

const SectionWrapper = styled.section`
  border: 1px solid blue;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const Section = ({id, children} : {id: string, children: React.ReactNode}) => {
  const {addRef} = useContext(ScrollContext)
  const ref = useMemo(()=>addRef(id), [id])
  
  return (
    <SectionWrapper ref={ref} id={id} >
      {children}
    </SectionWrapper>
  )
}

export default Section