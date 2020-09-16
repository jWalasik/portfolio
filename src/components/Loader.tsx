import React from 'react'
import styled from 'styled-components'
import {ReactComponent as Spinner} from '../assets/spinner.svg'

const Loader = ({children}: {children?: React.ReactNode}) => {
  return (
    <LoaderWrapper>
      <Spinner />      

      {children}
    </LoaderWrapper>
  )
}

const LoaderWrapper = styled.div`
  width: 100px;
  height: 100px;
  position: relative;

  svg {
    position: absolute;
    fill: transparent;
    stroke: #28ff28;
    stroke-width: 4;
    overflow: visible;
  }
`

export default Loader