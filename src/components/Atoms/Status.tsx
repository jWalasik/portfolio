import * as React from 'react'
import styled from 'styled-components'

const Status = () => {
  const [status, setStatus] = React.useState('Currently open for job offers')
  return (
    <StyledDiv>
      {status}
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  color: ${({theme}) => theme.color.offwhite};
  border: 2px solid;
  border-color: ${({theme}) => theme.color.neon};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 150px;
  width: 100%;
  margin: ${({theme}) => theme.spacing.l};
`

export default Status