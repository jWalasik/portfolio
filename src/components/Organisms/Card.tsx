import React, { useLayoutEffect, useState, useRef, useContext } from 'react'
import { Link } from 'react-router-dom'
import styled, { ThemeContext } from 'styled-components'
import {ReactComponent as Arrow} from '../../assets/arrow.svg'
import ShapeSVG from '../Molecules/ShapeSVG'
import LineTo from '../Atoms/LineTo'
import CardThumbnail from '../Molecules/CardThumbnail'

const Card = ({project}) => {
  const themeContext = useContext(ThemeContext)
  const [expanded, setExpanded] = useState(false)
  const [dimensions, setDimensions] = useState({width: 0, height: 0})
  const dimensionsRef = useRef(null)
  const [line, setLine] = useState('')

  useLayoutEffect(()=> {
    setLine(drawLine(project.title)) 

    if(dimensionsRef.current) {
      setDimensions({
        width: dimensionsRef.current.offsetWidth,
        height: dimensionsRef.current.offsetHeight
      })
    }
    window.addEventListener('resize', ()=>{
      setDimensions({
        width: dimensionsRef.current.offsetWidth,
        height: dimensionsRef.current.offsetHeight
      })
    })

    return () => {
      window.removeEventListener('resize', ()=>{
        setDimensions({
          width: dimensionsRef.current.offsetWidth,
          height: dimensionsRef.current.offsetHeight
        })
    })}
  }, [])

  const drawLine = (target) => {
    const parent = dimensionsRef.current.getBoundingClientRect()
    const thumbnail = document.getElementById(target+'-thumbnail').getBoundingClientRect()

    //relative bounds
    const top = thumbnail.top - parent.top,
          left = thumbnail.left - parent.left,
          right = thumbnail.right,
          bottom = top+thumbnail.height
    const [mx,my, ...rest] = [right,top, left,top, left,bottom, right,bottom, right, parent.bottom]

    return `M${mx},${my} L${rest}`
  }

  return (
    <>
    <StyledHeader>{project.title}</StyledHeader>
    <CardWrapper ref={dimensionsRef} onClick={()=>setExpanded(!expanded)}>
      
      <ShapeSVG 
        type='bevel-top'
        className='border-top'
        dimensions={dimensions}
      />   
      <StyledParagraphFirst className='short-description'>{project.description.short}</StyledParagraphFirst>
      {/* <StyledArrow fill='none' stroke={themeContext.color.neon} width='44px'  /> */}
      
      <ExpandableWrapper expanded={expanded}>
        <StyledParagraph>{project.description.features}</StyledParagraph>
        
        <CardThumbnail {...project} />
        
        {project.features}

        <StyledParagraph>{project.description.long}</StyledParagraph>

        <StyledParagraph>
          More details and though process behind developement:
          <StyledLink className='case' to={project.study}>CASE STUDY</StyledLink>
        </StyledParagraph>
      </ExpandableWrapper>
      
    <StackWrapper id={project.title+'stack'}>
      {project.stack}

    </StackWrapper>   

    <ShapeSVG 
        type='bevel-bottom'
        className='border-bottom'
        dimensions={dimensions}
    />
    </CardWrapper>
    </>
  )
}
const StyledHeader = styled.h3`
  margin-left: 0px;
  margin-bottom: ${({theme}) => theme.spacing.m};
`

const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all .3s ease-in;
  position: relative;
  z-index: 1;
  margin-bottom: ${({theme}) => theme.spacing.xl};
  padding-top: 10px;

  .border-top {
    position: absolute;
    height: 30px;
    transform: scale(-1,-1);
    transform-origin: 50% 50%;
    top: 0;
    left: 0;
    stroke-width: 2;
  }
  .border-bottom {
    height: ${({theme}) => `calc(${theme.line.body} + 2* ${theme.spacing.xs})`};
    bottom: 0;
    right: 0;
    stroke-width: 2;
    overflow: visible !important;
  }
`
const StyledArrow = styled(Arrow)`
  position: absolute;
  transform: rotate(30deg) translate(-100%);
  width: 40px;
  #first {

  }
  #second {
    visibility: hidden;
  }
  #third {
    transform: rotate(180deg);
  }
`


const ExpandableWrapper = styled.div.attrs(props=>{
})`
  display: flex;  
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  transition: all 1s ease;
  max-height: ${props => props.expanded ? '2000px' : 0};
  overflow: hidden;
  opacity: ${props => props.expanded ? 1 : 0};
`

const StyledLink = styled(Link)`
  white-space: wrap;
  margin: ${({theme}) => theme.spacing.s};
  margin-right: auto;
`

const StyledParagraph = styled.p`
  margin: 5% min(2.5%) 5%;
  white-space: wrap;
`
const StyledParagraphFirst = styled(StyledParagraph)`
  margin-bottom: 0;
  margin: ${({theme}) => theme.spacing.m};
  position: relative;

  /* &:before,:after {
    color: ${({theme}) => theme.color.neon};
  }
  &:before {
    transform: rotate(40deg);
    position: absolute;
    content: '⇱';
    top: 100%;
    right: 50%;
  }
  &:after {
    position: absolute;
    content: '⇱';
    transform: rotate(-140deg);
    bottom: 100%;
    left: calc(50% - 18px);
  } */
` 
const StackWrapper = styled.div`
  width: 12rem; 
  background-color: ${({theme}) => theme.color.shadow};
  margin-left: auto;
  padding: ${({theme}) => theme.spacing.xs};
  text-align: center;
  position: relative;
  
  :before {
    position: absolute;
    right: 0;
    bottom: 0;
    border-left: ${({theme}) => `calc(${theme.line.body} + 2*${theme.spacing.xs})`} solid transparent;
    border-bottom: ${({theme}) => `calc(${theme.line.body} + 2* ${theme.spacing.xs})`} solid ${({theme}) => theme.color.bgMain};
    content: '';
  }
  :after {
    position: absolute;
    left: 0;
    bottom: 0;
    border-right: ${({theme}) => `calc(${theme.line.body} + 2* ${theme.spacing.xs})`} solid transparent;
    border-top: ${({theme}) => `calc(${theme.line.body} + 2* ${theme.spacing.xs})`} solid ${({theme}) => theme.color.bgMain};
    content: '';
  }
`

export default Card