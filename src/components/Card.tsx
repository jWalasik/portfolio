import React, { useLayoutEffect, useState, useRef, useContext } from 'react'
import { Link } from 'react-router-dom'
import styled, { ThemeContext } from 'styled-components'

import {ReactComponent as Git} from '../assets/icons/github.svg'
import {ReactComponent as Live} from '../assets/icons/website.svg'
import {ReactComponent as Arrow} from '../assets/arrow.svg'
import ShapeSVG from './ShapeSVG'
import LineTo from './LineTo'

const Card = ({project}) => {
  const themeContext = useContext(ThemeContext)
  const [collapsed, setCollapsed] = useState(true)
  const [dimensions, setDimensions] = useState({width: 0, height: 0})
  const dimensionsRef = useRef(null)
  const [line, setLine] = useState('')

  useLayoutEffect(()=> {
    setLine(drawLine(project.title)) 
    const stack=document.getElementById(`${project.title+'stack'}`)
    //console.log(stack.getBoundingClientRect())

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
  }, [])

  const drawLine = (target) => {
    const parent = dimensionsRef.current.getBoundingClientRect()
    const thumbnail = document.getElementById(target+'-thumbnail').getBoundingClientRect()
    console.log(thumbnail.width, thumbnail.right, parent.width, parent.right)
    //relative bounds
    const top = thumbnail.top - parent.top,
          left = thumbnail.left - parent.left,
          right = thumbnail.right,
          bottom = top+thumbnail.height
    const [mx,my, ...rest] = [right,top, left,top, left,bottom, right,bottom, right, parent.bottom]

    return `M${mx},${my} L${rest}`
  }

  return (
    <CardWrapper ref={dimensionsRef} onClick={()=>setCollapsed(!collapsed)}>
      <StyledHeader>{project.title}</StyledHeader>
      <ShapeSVG 
        type='bevel-top'
        className='border-top'
        dimensions={dimensions}
      />   
      <StyledParagraph className='short-description'>{project.description.short}</StyledParagraph>

      <ExpandableWrapper className={collapsed? 'collapsed' : ''} collapsed={collapsed}>
        <StyledParagraph>{project.description.features}</StyledParagraph>
        
        <StyledThumbnail id={`${project.title}-thumbnail`} >
          <IconsWrapper>
            <a href={project.github} onClick={(e)=>e.stopPropagation()}><Git /></a>
            <a href={project.live} onClick={(e)=>e.stopPropagation()}><Live /></a>
          </IconsWrapper>
          <img src={project.image? project.image : 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'}  alt={project.title} />
        </StyledThumbnail>
        
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
  )
}

const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all .3s ease-in;
  position: relative;
  z-index: 1;

  .short-description {
    margin-top: 50px;
    margin-bottom: 0;
  }

  .border-top {
    position: absolute;
    height: 30px;
    transform: scale(-1,-1);
    transform-origin: 50% 50%;
    top: 60px;
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

  .collapsed {
    max-height: 2000px;
    opacity: 1;
  }
`
const ExpandableWrapper = styled.div.attrs(props=>{
})`
  display: flex;  
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  transition: all 1s ease;
  max-height: 0px;
  overflow: hidden;
  opacity: 0;
`

const StyledHeader = styled.h3`
  margin-left: 0px;
`

const StyledThumbnail = styled.div`
  position: relative;
  width: ${({theme}) => `calc( 100% - 2*(${theme.line.body} + 2* ${theme.spacing.xs}))`};
  height: 350px;
  border: 1px solid ${({theme}) => theme.color.neon};
  z-index: 1;

  @media screen and (max-width: 768px) {
    min-width: 95%;
  }

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
    z-index: -1;
  }
`

const IconsWrapper = styled.div`
  display: flex;
  margin-left: auto;
  position: absolute;
  right: 2%;
  top: 5%;
  
  svg {
    margin: ${({theme}) => theme.spacing.xs};
    height: 44px;
    fill: ${({theme}) => theme.color.neon};
    filter: drop-shadow(0 0 15px black);
  }
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