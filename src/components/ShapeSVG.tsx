import * as React from 'react'
import { useState, useCallback, useRef, useEffect, useContext } from 'react'
import styled, {ThemeContext} from 'styled-components'
import SVG from './SVG'

const ShapeSVG = ({className, dimensions, type}) => {
  const [geometries, setGeometries] = useState([])
  const theme = useContext(ThemeContext)
  const {width:x, height:y} = dimensions

  const inputValidation = () => {

  }
  const drawBevel = (h) => {

  }
  const drawLine = (from, to) => {

  }
  const shapes = {
    bevel: drawBevel,
    line: drawLine
  }

  return (
    <StyledSVG 
      viewBox={`0 0 100 10`} 
      dimensions={dimensions}
      className={className}
      preserveAspectRatio={'xMaxYMax meet'}
      width='100%'
      vectorEffect='non-scaling-stroke'
    >
      <defs>
        <filter id="blur">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
        </filter>
        <linearGradient gradientUnits="userSpaceOnUse" id="grad" x1="10%" y1="0%" x2="90%" y2="0%" >
          <stop offset="0%"   stopColor={theme.color.bgMain}/>
          <stop offset="100%" stopColor={theme.color.neon}/>
        </linearGradient>
        <linearGradient id="fade-diagonal" gradientUnits="userSpaceOnUse" 
          x1="0%" y1="0%" x2="100%" y2="0%" gradientTransform="rotate(65)">
          <stop offset="0%" stopColor={theme.color.bgMain} stopOpacity="0"/>
          <stop offset="40%" stopColor={theme.color.neon} stopOpacity="1"/>
        </linearGradient>
        <polyline id='bevel' points='0,10, 90,10, 100,0, 100,-60' stroke='url(#fade-diagonal)' vectorEffect="non-scaling-stroke" />

      </defs>
      {/* spliting parts into multiple svgs allow different scalling on each axis */}
      <use href='#bevel' />
      <use href='#bevel' filter='url(#blur)' />
    </StyledSVG>
  )
}

const StyledSVG = styled(SVG).attrs(props=>{

})`
  position: absolute;
  fill: none;
  overflow: visible !important;
  pointer-events: none;
`

export default ShapeSVG