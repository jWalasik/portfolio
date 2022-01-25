import React, { useContext, useEffect, useRef } from "react"
import styled, { ThemeContext } from "styled-components"
import SVG from "../Atoms/SVG"

interface CardWrapperProps {
  background?: any
}

const CardWrapper:React.FC<CardWrapperProps> = ({children}) => {
  const ref = useRef()
  return (
    <StyledContainer ref={ref}>
      <StyledSVG>
        <polyline points='0,10, 90,10, 100,0, 100,-60' transform='translate(0, 90)' stroke='url(#fade-diagonal)' vectorEffect="non-scaling-stroke" />
      </StyledSVG>
      {children}
      <StyledSVG >
        <polyline id='top-border' points='0,10, 90,10, 100,0, 100,-60' stroke='url(#fade-diagonal)' vectorEffect="non-scaling-stroke"  transform="scale(-1,-1) translate(-100, -10)"/>
      </StyledSVG>
    </StyledContainer>
  )
}

const StyledContainer = styled.div.attrs(props =>{
  console.log(props)
  
  })`
  display: grid;
  grid-template-columns: 1px auto 1px;
  grid-template-rows: 1px auto 1px;
  min-width: 320px;
  max-width: 400px;
  margin: ${({theme}) => theme.spacing.m};
  background-image: ${props => {
    console.log(props)
    return (props.background)}};
`

const StyledSVG = styled(SVG)`
  fill: none;
  grid-area: 1/1/3/3;
  overflow: visible;
  filter: url(#glow);

  #top-border {
  }
  #bottom-border {
  }
`
export default CardWrapper