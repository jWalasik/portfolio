import * as React from 'react'
import styled from 'styled-components'

const Status = () => {
  return (
    <StyledDiv>
      CURRENTLY OPEN FOR JOB OFFERS
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  color: ${({theme}) => theme.color.offwhite};
  border: 2px solid;
  border-color: ${({theme}) => theme.color.neon};
  border-radius: 10px;
  text-align: center;
  padding: ${({theme}) => theme.spacing.m}
`

export default Status