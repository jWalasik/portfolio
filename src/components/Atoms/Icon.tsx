import React from "react"
import styled from "styled-components"
import { CodepenIcon, CodewarsIcon, FacebookIcon, GithubIcon, LinkedinIcon, MailIcon, ProjectsIcon } from "../../assets/icons/icons"

interface IconProps {
  variant: string,
  size?: number,
  href: string
}

const variants = {
  codepen: <CodepenIcon />,
  codewars: <CodewarsIcon />,
  facebook: <FacebookIcon />,
  github: <GithubIcon />,
  linked: <LinkedinIcon />,
  mail: <MailIcon />,
  resume: <ProjectsIcon />,
}

const IconLink: React.FC<IconProps> = ({variant, size, href}) => {
  return (
    <StyledAnchor href={href}>{variants[variant]}</StyledAnchor>
  )
}

const StyledAnchor = styled.a`
  height: 44px;
  width: 44px;
  opacity: .7;

  svg {
    fill: ${({theme}) => theme.color.offwhite};
    margin-left: 5px;
  }

  &:hover {
    opacity: 1;
    svg {
      fill: ${({theme}) => theme.color.neon};
      filter: url(#glow);
    }
  }
  @media ${({theme}) => theme.breakpoints.mobile} {
    height: 36px;
    width: 36px;
  }
`

export default IconLink