import React from 'react'
import styled from 'styled-components'
import {ReactComponent as Spinner} from '../assets/spinner.svg'

const Loader = ({children}: {children?: React.ReactNode}) => {
  return (
    <LoaderWrapper>
      <Spinner>
      {children}
      </Spinner>
      
    </LoaderWrapper>
  )
}

const LoaderWrapper = styled.div`
  

  svg {
    width: 100%;
    height: 100%;
    position: absolute;
    fill: transparent;
    stroke: red;
    stroke-width: 2;
    overflow: visible;
  }
`

export default Loader