import * as React from 'react'
import styled from 'styled-components'
import { Trans, useTranslation } from 'react-i18next'

import {ReactComponent as Database} from '../assets/database.svg'
import {ReactComponent as Backend} from '../assets/gear.svg'
import {ReactComponent as Frontend} from '../assets/frontend.svg'
import {ReactComponent as Core} from '../assets/laptop.svg'

type Skills = object

const Skills = () => {
  const {t, i18n} = useTranslation('stack')
  const technologies = Object.entries(t<Skills>('techs', { returnObjects: true }))
    .map((tech, i) => {
      const [before, after] = tech[0].split(/\w+/)
      return (
        <TechWrapper key={i}>
          <StyledHeader before={before} after={after}>{tech[0]}</StyledHeader>
          <StyledParagraph>
            {tech[1].map((p: React.ReactNode, i: number) => <Trans key={i}>{p}</Trans>)}
          </StyledParagraph>
        </TechWrapper>
      )
    })
  return (
    <SkillsWrapper>
      {/* {technologies} */}
      <TechWrapper>
        <StyledHeader>{`{ Core }`}</StyledHeader>
        <Core stroke='red' width='100px'/>
        <StyledParagraph>
        <Trans>
          I work predominantly in 
          <strong>Javascript</strong>
          , it's by far my strongest language. Lately I've adopted
          <strong>Typescript</strong>
          for better productivity.
          Code quality and maintainablity are paramount to me, so I always do my best to ensure my work is properly
          <strong>tested and documented</strong>
        </Trans> 
        </StyledParagraph>
      </TechWrapper>

      <TechWrapper>
        <StyledHeader>{`< Frontend />`}</StyledHeader>
        <Frontend stroke='red' width='100px'/>
        <StyledParagraph>
        <Trans>
          <strong>React</strong> is my primary area of expertise, I have experience in using it for 
          <strong>CSR/SSR/Native</strong>
          apps. In regard to design I'm familar with wide variety of options: templating engines, preprocessors, CSS-in-JS libraries and . I'm familar with semantic HTML5, rules of Accessibility and popular naming conventions.    
        </Trans>
        </StyledParagraph>        
      </TechWrapper>

      <TechWrapper>

        <StyledHeader>{`[ Backend ]`}</StyledHeader>
        <Backend stroke='red' width='100px'/>
        <StyledParagraph>
        <Trans>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Trans>        
        </StyledParagraph>
      </TechWrapper>

      <TechWrapper>
        <StyledHeader>{`( Databases )`}</StyledHeader>
        <Database stroke='red' width='100px'/>
        <StyledParagraph>
        <Trans>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Trans> 
        </StyledParagraph>        
      </TechWrapper>
    </SkillsWrapper>
  )
}
const SkillsWrapper = styled.ul`
  list-style: none;
  padding: 0;
`
const TechWrapper = styled.li`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  svg {
    width: 100px;
    height: 100px;
    margin-top: 20px;
    stroke: ${({theme}) => theme.color.neon};
    fill: none;
    filter: url(#glow);
    flex: 1;
  }
`
const StyledHeader = styled.h3.attrs(props => {})`
    flex: 2;
`
const StyledIcon = styled.svg``

const StyledParagraph = styled.p`
  strong {
    color: ${({theme}) => theme.color.neon};
  }
`

export default Skills