import React, { useState } from 'react'
import styled from 'styled-components'
import Thumbnail from './Thumbnail'

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
      <h3>{project.title}</h3>
      <div>
        ICONS
      </div>
      {
        collapsed
        ?
        <p>{project.description.short}</p>
        :
        <div>
          <p>{project.description.short}</p>
          <p>{project.description.long}</p>

          <Thumbnail url={project.image} />

          CASE STUDY
        </div>
      }
      <div>{project.stack}</div>
    </CardWrapper>
  )
}

const CardWrapper = styled.div`
  border: 1px solid green;
`

export default Card