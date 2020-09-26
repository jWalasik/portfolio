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

  return (
    <CardWrapper onClick={()=>setCollapsed(!collapsed)} className={collapsed ? '' : 'active'}>

      <TopWrapper>
        <h3>{project.title}</h3>

        <IconsWrapper>
          <a href={project.github}><Git /></a>
          <a href={project.live}><Live /></a>
        </IconsWrapper>
      </TopWrapper>

      <div className="bevel top"></div>

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
      <div className="bevel bottom"></div>
    </CardWrapper>
  )
}

const CardWrapper = styled.div`
  .active {
    transition: all 1s ease-in;
    border: 3px solid red;
  }
  margin: ${({theme})=>theme.spacing.s};
  position: relative;
  display: flex;
  flex-direction: column;
  transition: all 1s ease-in;

  width: 85%;

  border: 1px solid red;

  h3 {
    font-family: ${({theme})=>theme.font.fontSpecial};
    font-weight: 300;
    align-self: center;
  }

  .bevel {
    border: 2px solid green;
    position: absolute;
    width: 50%;
    height: 50%;
  }
  .bottom {
    bottom: 0;
    right: 0;
  }
`

const BorderWrapper = styled(Border)`
  position:absolute;
  width: 100%;
  height: 100%;
  stroke-width: 1;
  fill: transparent;
  overflow: visible;
  stroke: url(#gradient);
  filter: url(#glow);
  transition: height ease-in-out 1s;

  .top {
    transform: scale(-.6,-.6);
    transform-origin: 38% 38%;
  }
`

const IconsWrapper = styled.div`
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
  transition: all 1s ease-in;
  border: 1px solid yellow;

  .case {
    text-decoration: none;
    color: ${({theme})=>theme.color.neon};
  }
`
const StackWrapper = styled.div`
  padding: 0 15% 0 15%;
  margin-left: auto;
  color: ${({theme})=>theme.color.offwhite};
  background-color: black;
  clip-path: polygon(23px 0%, 100% 0%, calc(100% - 23px) 100%, 0% 100%);
`

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid blue;
`
export default Card