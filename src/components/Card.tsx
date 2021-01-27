import React, { useLayoutEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import {ReactComponent as Git} from '../assets/icons/github.svg'
import {ReactComponent as Live} from '../assets/icons/website.svg'
import ShapeSVG from './ShapeSVG'

const Card = ({project}) => {
  const [collapsed, setCollapsed] = useState(true)
  const [dimensions, setDimensions] = useState({width: 0, height: 0})
  const dimensionsRef = useRef(null)
  
  useLayoutEffect(()=> {
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
  
  return (
    <CardWrapper ref={dimensionsRef} onClick={()=>setCollapsed(!collapsed)}>
      <ShapeSVG className='card-border' dimensions={dimensions} />
      <StyledHeader>{project.title}</StyledHeader>

      <IconsWrapper>
        <a href={project.github}><Git /></a>
        <a href={project.live}><Live /></a>
      </IconsWrapper>
    
    
    <StyledParagraph>{project.description.short}</StyledParagraph>
    <div className={collapsed ? 'hide' : ''}>
    <StyledParagraph>{project.description.features}</StyledParagraph>
    
    <StyledThumbnail src={project.image}  alt={project.title}/>
    
    {project.features}

    <StyledParagraph>{project.description.long}</StyledParagraph>

    <StyledParagraph>
      More details and though process behind developement:
      <StyledLink className='case' to={project.study}>CASE STUDY</StyledLink>
    </StyledParagraph>
    </div>
      
    <StackWrapper>
      {project.stack}
    </StackWrapper>   

    </CardWrapper>
  )
}

const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${({theme}) => theme.spacing.l} 0;
  transition: all 1s ease-in;

  .hide {
    display: none;
    
  }
`

const StyledHeader = styled.h3`

`

const StyledThumbnail = styled.img`
  object-fit: cover;
  width: 95%;
  height: 350px;
`

const IconsWrapper = styled.div`
  display: flex;
  margin-left: auto;
  
  svg {
    margin: ${({theme}) => theme.spacing.xs};
    height: 44px;
    fill: ${({theme}) => theme.color.offwhite};
  }
`
const StyledLink = styled(Link)`
  white-space: nowrap;
  margin: ${({theme}) => theme.spacing.s};
  margin-right: auto;
`

const StyledParagraph = styled.div`
  min-height: 150px;
  margin: ${({theme}) => theme.spacing.s} 0;
`
const StackWrapper = styled.div`
  width: 12rem; 
  background-color: ${({theme}) => theme.color.shadow};
  margin-left: auto;
  padding: ${({theme}) => theme.spacing.xs};
  text-align: center;
`

export default Card