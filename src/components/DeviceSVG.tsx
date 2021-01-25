import * as React from 'react'
import styled from 'styled-components'

import { ReactComponent as Laptop } from '../assets/laptop.svg' 
import { ReactComponent as Tablet } from '../assets/tablet.svg' 
import { ReactComponent as Mobile } from '../assets/mobile.svg' 
import laptop from '../assets/laptop.svg' 

const DeviceSVG = () => {
  return (
    <SVGWrapper>
      {/* <StyledLaptop />
      <StyledTablet />
      <StyledMobile /> */}
    </SVGWrapper>
  )
}

const SVGWrapper = styled.div`
  border: 1px red solid;
  width: 100%;
  min-height: 150px;
  display: flex;
  justify-content: space-around;
`

const StyledLaptop = styled(Laptop)`
  stroke: ${({theme}) => theme.color.neon};
  fill: none;
  #keyboard {
    fill: ${({theme}) => theme.color.neon};
  }
  visibility: hidden;

  @media ${({theme}) => theme.breakpoints.laptop} {
    visibility: visible;
  }
`
const StyledTablet = styled(Tablet)`
  fill: ${({theme}) => theme.color.neon};
  visibility: hidden;

  @media ${({theme}) => theme.breakpoints.tablet} {
    visibility: visible;
  }
`

const StyledMobile = styled(Mobile)`
  fill: ${({theme}) => theme.color.neon};
  visibility: hidden;

  @media ${({theme}) => theme.breakpoints.mobileS} {
    visibility: visible;
  }
`
export default DeviceSVG