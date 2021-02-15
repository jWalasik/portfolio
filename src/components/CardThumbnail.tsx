import * as React from 'react'
import styled from 'styled-components'

import {ReactComponent as Git} from '../assets/icons/github.svg'
import {ReactComponent as Live} from '../assets/icons/website.svg'
const placeholderURL = 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'

const CardThumbnail = ({image, title, github, live}) => {
  return (
    <StyledThumbnail id={`${title}-thumbnail`}>
      <IconsWrapper>
        <a href={github} onClick={(e)=>e.stopPropagation()}><Git /></a>
        <a href={live} onClick={(e)=>e.stopPropagation()}><Live /></a>
      </IconsWrapper>
      <StyledImg 
        src={image ? image : placeholderURL}
        alt={title}
      />
    </StyledThumbnail>
  )
}

const StyledThumbnail = styled.div`
  position: relative;
  width: ${({theme}) => `calc( 100% - 2*(${theme.line.body} + 2* ${theme.spacing.xs}))`};
  height: 350px;
  border: 1px solid ${({theme}) => theme.color.neon};
  z-index: 1;

  @media screen and (max-width: 768px) {
    min-width: 95%;
  }
`
const StyledImg = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  z-index: -1;
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

    &:hover {
      filter: drop-shadow(0 0 15px green);
    }
  }
`

export default CardThumbnail