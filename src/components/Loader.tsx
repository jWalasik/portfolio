import React from 'react'
import styled from 'styled-components'
import {ReactComponent as Hexagon} from '../assets/hexagon.svg'

const Loader = ({children}: {children?: React.ReactNode}) => {
  
  return (
    <LoaderWrapper>
      <Spinner />      

      {children}
    </LoaderWrapper>
  )
}

const LoaderWrapper = styled.div`
  width: 80px;
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;

`

const Spinner = styled(Hexagon)`
  width: 100%;
  stroke: ${({theme})=>theme.color && theme.color.neon}; 
  stroke-width: 5;
  fill: transparent;
  position: absolute;
`

export default Loader