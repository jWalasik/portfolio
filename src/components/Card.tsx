import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Thumbnail from './Thumbnail'
import {ReactComponent as Border} from '../assets/bevel.svg'

import {ReactComponent as Git} from '../assets/icons/github.svg'
import {ReactComponent as Live} from '../assets/icons/website.svg'

interface Project {
  title: string;
  stack: string;
  github: string;
  live: string;
  description: object;
  image: string;
  study: string;
}

const Card = ({project}: {project: any}) => {
  const [collapsed, setCollapsed] = useState(true)

  return (
    <CardWrapper>
      <StyledHeader>{project.title}</StyledHeader>

      <IconsWrapper>
        <a href={project.github}><Git /></a>
        <a href={project.live}><Live /></a>
      </IconsWrapper>
    
    
    <StyledParagraph>{project.description.short}</StyledParagraph>
    <StyledParagraph>{project.description.features}</StyledParagraph>
    
    <StyledThumbnail src={project.image}  alt={project.title}/>
    
    {project.features}

    <StyledParagraph>{project.description.long}</StyledParagraph>
    
    <StyledParagraph>
      More details and though process behind developement:
      <StyledLink className='case' to={project.study}>CASE STUDY</StyledLink>
    </StyledParagraph>
      
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
`

const StyledHeader = styled.h3`
  color: ${({theme}) => theme.color.neon};
  font-size: ${({theme}) => theme.fontSize.heading};
  font-family: ${({theme}) => theme.font.accent};
  font-weight: 100;
  margin: ${({theme}) => theme.spacing.l + ' auto 0 '+theme.spacing.l};
  margin-right: auto;
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
  text-decoration: none;
  color: ${({theme}) => theme.color.neon};
  white-space: nowrap;
  margin: ${({theme}) => theme.spacing.s};
  margin-right: auto;
`

const StyledParagraph = styled.div`
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