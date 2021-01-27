import * as React from 'react'
import { useState, useCallback, useRef } from 'react'
import styled from 'styled-components'
import SVG from './SVG'

const StyledSVG = styled(SVG).attrs(props=>{

})`
  position: absolute;
  width: ${props => props.dimensions.width}px;
  height: ${props => props.dimensions.height}px;
  z-index: 10;
  stroke: ${({theme}) => theme.color.neon};
  overflow: visible;
`

const ShapeSVG = ({className, dimensions, ...rest}) => {
  const {height, width} = dimensions
  
  const bevelBottom = (start, end, bevelH) => {
    return `M${start * width},${height} L${width- bevelH}, ${height} ${width},${height-bevelH} ${width},${end*height}`
  }
  const bevelTop = (start, end, bevelH) => {
    return `M${0},${start*height} L${0}, ${0+bevelH} ${0+bevelH},${0} ${end*width},${0}`
  }
  return (
    <StyledSVG viewBox={`0 0 ${dimensions.width} ${dimensions.height}`} className={className} dimensions={dimensions}>
      <defs>
        <linearGradient id="fade" x1="40" y1="210" x2="460" y2="290" gradientUnits="userSpaceOnUse">
          <stop stopColor="black" offset="0" />
          <stop stopColor="red" offset="1" />
        </linearGradient>
      </defs>
      <path 
        d={bevelBottom(0.3, 0.5, 41)}
        filter='url(#glow)'
        strokeWidth='1'
        fill='none'

      />
      <path
        d={bevelTop(0.3, 0.5, 41)}
        filter='url(#glow)'
        strokeWidth='1'
        fill='none'

        transform='translate(-15,65)'
      />
    </StyledSVG>
  )
}

export default ShapeSVG