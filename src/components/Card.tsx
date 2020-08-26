import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Thumbnail from './Thumbnail'

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
    <CardWrapper onClick={()=>setCollapsed(!collapsed)}>
      <h3>{project.title}</h3>
      <IconsWrapper>
        <Git />
        <Live />
      </IconsWrapper>
      {
        collapsed
        ?
        <p>{project.description.short}</p>
        :
        <div>
          <p>{project.description.short}</p>
          <p>{project.description.long}</p>

          <Thumbnail url={project.image} />

          <Link to={project.study}>CASE STUDY</Link>
        </div>
      }
      <div>{project.stack}</div>
    </CardWrapper>
  )
}

const CardWrapper = styled.div`
  border: 1px solid green;
`
const IconsWrapper = styled.div`
  svg {
    height: 44px;
    fill: ${({theme})=>theme.color.offwhite};
  }
  svg:hover {
    fill: ${({theme})=>theme.color.neon};
    transition: all ease-out 1s;
  }
`
export default Card