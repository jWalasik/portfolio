import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Thumbnail from './Thumbnail'
import {ReactComponent as Border} from '../assets/border.svg'

import {ReactComponent as Git} from '../assets/icons/github.svg'
import {ReactComponent as Live} from '../assets/icons/website.svg'

interface Project {
  title: string;
  stack: string;
  github: string;
  live: string;
  description: Object;
  image: string;
  study: string;
}

const Card = ({project}: {project: any}) => {
  const [collapsed, setCollapsed] = useState(true)
  console.log(project)
  return (
    <CardWrapper onClick={()=>setCollapsed(!collapsed)}>
      <BorderWrapper></BorderWrapper>
      
      <h3>{project.title}</h3>

      <IconsWrapper>
        <a href={project.github}><Git /></a>
        <a href={project.live}><Live /></a>
      </IconsWrapper>
      <div><Border /></div>
      <DetailsWrapper>
      {
        collapsed
        ?
        <p>{project.description.short}</p>
        :
        <div>
          <p>{project.description.short}</p>
          <p>{project.description.long}</p>

          <Thumbnail url={project.image} />

          <Link className='case' to={project.study}>CASE STUDY</Link>
        </div>
      }
      </DetailsWrapper>
      
      <StackWrapper>{project.stack}</StackWrapper>
      <div><Border/></div>
    </CardWrapper>
  )
}

const CardWrapper = styled.div`
  width: 85%;
  margin: ${({theme})=>theme.spacing.s};
  position: relative;
  display: grid;
  grid-template-columns: 5% 45% 30% 20%;
  grid-template-rows: 2.5rem auto 2.5rem;
  transition: all 1s ease-in;

  h3 {
    grid-area: 1/2/1/3;
    font-family: ${({theme})=>theme.font.fontSpecial};
    font-weight: 300;
    align-self: center;
  }
`

const BorderWrapper = styled(Border)`
  position:absolute;
  width: 100%;
  height: 100%;
  stroke-width: .75;
  fill: transparent;
  overflow: visible;
  stroke: url(#gradient);
  filter: url(#glow);
  transition: height ease-in-out 1s;

  .top {
    transform: scale(-.6,-.6);
    transform-origin: 38% 38%;
    stroke-width: 1.25;
  }
`

const IconsWrapper = styled.div`
  grid-area: 1/4/2/5;
  margin-left: auto;
  svg {
    height: 44px;
    fill: ${({theme})=>theme.color.offwhite};
    margin-left: ${({theme})=>theme.spacing.s};
  }
  svg:hover {
    fill: ${({theme})=>theme.color.neon};
    transition: all ease-out 1s;
  }
`
const DetailsWrapper = styled.div`
  grid-area: 2/2/3/5;
  transition: all 1s ease-in;

  .case {
    text-decoration: none;
    color: ${({theme})=>theme.color.neon};
  }
`
const StackWrapper = styled.div`
  grid-area: 3/3/3/5;
  padding: 0 15% 0 15%;
  margin-left: auto;
  color: ${({theme})=>theme.color.offwhite};
  background-color: black;
  clip-path: polygon(23px 0%, 100% 0%, calc(100% - 23px) 100%, 0% 100%);
`
export default Card