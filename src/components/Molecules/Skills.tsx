import * as React from 'react'
import styled from 'styled-components'
import { Trans, useTranslation } from 'react-i18next'

import {ReactComponent as Database} from '../../assets/images/database.svg'
import {ReactComponent as Backend} from '../../assets/images/gear.svg'
import {ReactComponent as Frontend} from '../../assets/images/frontend.svg'
import {ReactComponent as Core} from '../../assets/images/tools.svg'

type Skills = object

const Skills = () => {
  const {t, i18n} = useTranslation('stack')
  // const technologies = Object.entries(t<Skills>('techs', { returnObjects: true }))
  //   .map((tech, i) => {
  //     const [before, after] = tech[0].split(/\w+/)
  //     return (
  //       <TechWrapper key={i}>
  //         <StyledHeader before={before} after={after}>{tech[0]}</StyledHeader>
  //         <StyledParagraph>
  //           {tech[1].map((p: React.ReactNode, i: number) => <Trans key={i}>{p}</Trans>)}
  //         </StyledParagraph>
  //       </TechWrapper>
  //     )
  //   })
  return (
    <SkillsWrapper>
      <TechWrapper>
        <StyledHeader>{`< Frontend />`}</StyledHeader>
        <Frontend />
        <StyledParagraph>
          <Trans>
            Cutting edge websites and applications
            Responsiveness and Accessibility

          </Trans>
          FAV TECHS: React, Redux, Styled Components
        </StyledParagraph>
      </TechWrapper>

      <TechWrapper>
        <StyledHeader>{`{ Core }`}</StyledHeader>
        <Core />
        <StyledParagraph>
          <Trans>
            Delivery of high quality codebase
            Adhering to modern standards
            Heavy emphasis on maintenance and best practices
          </Trans>
          FAV TECHS: Javascript, Typescript, Jest, GIT
        </StyledParagraph>
      </TechWrapper>

      <TechWrapper>
        <StyledHeader>{`[ Backend ]`}</StyledHeader>
        <Backend />
        <StyledParagraph>
          <Trans>
            Servers
            Microservices
            REST/GraphQL APIs
            Bots
          </Trans>
          Fav Techs: Node.js, GraphQL, Next.js      
        </StyledParagraph>
      </TechWrapper>

      <TechWrapper>
        <StyledHeader>{`( Databases )`}</StyledHeader>
        <Database />
        <StyledParagraph>
          <Trans>
            SQL and noSQL databases
            Maintanance, migrations, and backups
          </Trans>
          Fav Techs: Prisma, MongoDB, Firebase
        </StyledParagraph>    
      </TechWrapper>
    </SkillsWrapper>
  )
}
const SkillsWrapper = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
`
const TechWrapper = styled.div`
  border: 1px solid green;
  border-radius: 15px;
  display: grid;
  grid-template-rows: 20% 50% 30%;
  grid-template-columns: 35% 65%;
  width: 100%;
  max-width: 300px;
  overflow: hidden;
  margin: ${({theme}) => theme.spacing.m} 0;
  padding: ${({theme}) => theme.spacing.m};

  svg {
    fill: none;
    stroke: ${({theme}) => theme.color.neon};
    filter: url(#glow);
    grid-area: 2/2/4/4;
    opacity: .1;
  }

  @media screen and (max-width: 750px) {
    max-width: 750px;
  } 
`

const StyledHeader = styled.h3.attrs(props => {})`
  grid-area: 1/1/1/3;
  margin: 0;
  align-self: center;
  font-weight: 100;
  font-family: ${({theme}) => theme.font.accent};
`

const StyledParagraph = styled.p`
  grid-area: 2/1/3/3;
  font-weight: 100;
`

export default Skills