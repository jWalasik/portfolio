import * as React from 'react'
import styled from 'styled-components'
import Skills from '../Molecules/Skills'

const TechStack = () => {  
  return (
    <StackWrapper>
      <Skills />   
    </StackWrapper>
  )
}

const StackWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 700px) {
    flex-direction: row-reverse;
  }
`

export default TechStack