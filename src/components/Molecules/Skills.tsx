import * as React from 'react'
import styled from 'styled-components'
import { Trans, useTranslation } from 'react-i18next'

import {ReactComponent as Database} from '../../assets/database.svg'
import {ReactComponent as Backend} from '../../assets/gear.svg'
import {ReactComponent as Frontend} from '../../assets/frontend.svg'
import {ReactComponent as Core} from '../../assets/laptop.svg'
import ShapeSVG from './ShapeSVG'
import CardWrapper from './CardWrapper'

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
      {/* {technologies} */}
      <CardWrapper background="core">
        <FlexBox>
          <StyledHeader>{`{ Core }`}</StyledHeader>
          <StyledParagraph>
            <Trans>
              Delivery of high quality codebase
              Adhering to modern standards
              Heavy emphasis on maintenance and best practices
            </Trans>
          </StyledParagraph>
          <Techs>FAV TECHS: Javascript, Typescript, Jest, GIT
          </Techs>
        </FlexBox>

      </CardWrapper>

      <CardWrapper>
      <FlexBox>
        <StyledHeader>{`< Frontend />`}</StyledHeader>
        <Frontend stroke='red' width='100px'/>
        <StyledParagraph>
          <Trans>
            Cutting edge websites and applications
            Responsiveness and Accessibility

          </Trans>
        </StyledParagraph>
        <Techs>FAV TECHS: React, Redux, Styled Components,
        </Techs>
        </FlexBox>
      </CardWrapper>

      <CardWrapper>
      <FlexBox>
        <StyledHeader>{`[ Backend ]`}</StyledHeader>
        <Backend stroke='red' width='100px'/>
        <StyledParagraph>
          <Trans>
            Servers
            Microservices
            REST/GraphQL APIs
            Bots
          </Trans>        
        </StyledParagraph>
        <Techs>Fav Techs: Node.js, GraphQL, Next.js</Techs>
        </FlexBox>
      </CardWrapper>

      <CardWrapper>
      <FlexBox>
        <StyledHeader>{`( Databases )`}</StyledHeader>
        <Database stroke='red' width='100px'/>
        <StyledParagraph>
          <Trans>
            SQL and noSQL databases
            Maintanance, migrations, and backups
          </Trans> 
        </StyledParagraph>    
        <Techs>Fav Techs: Prisma, MongoDB, Firebase</Techs>  
        </FlexBox>  
      </CardWrapper>

    </SkillsWrapper>
  )
}
const SkillsWrapper = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

const StyledHeader = styled.h3.attrs(props => {})`
  margin: 0;
  align-self: center;
  font-weight: 100;
  font-family: ${({theme}) => theme.font.accent};
`
const Techs = styled.div`
`

const StyledParagraph = styled.p`
  
`

const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: 2/2/2/2
`

export default Skills