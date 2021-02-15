import * as React from 'react'
import styled, {keyframes} from 'styled-components'
import { Trans, useTranslation } from 'react-i18next'
import { ScrollContext } from '../ctx/Scroll'

const Bio = () => {
  const ctx = React.useContext(ScrollContext)
  const handleClick = (e) => {
    e.preventDefault()
    ctx.scrollTo(e)
  }
  return (
    <BioWrapper>      
      {/* weird formating helps with reading of interpolated elements like links,
          each line serves as index 0,1,2... etc corresponding to index in translation file
      */}
      <StyledParagraph i18nKey='about:description.introduction'>
        My name is Jacek Walasik and I am self-taught 
        <strong>Javascript</strong>
        coder.
      </StyledParagraph>
      <br></br>
      <StyledParagraph>
        <Trans i18nKey='about:description.experience'>
          I've been tinkering with
          <strong>Web Development</strong>
          for 
          <strong>about 3 years</strong>
          . My projects can be found at
          <a href='https://github.com/elPaleniozord'>Github repository</a>
          , for smaller works and experiment check out
          <a href='https://codepen.io/elPaleniozord'>my Codepen profile</a>. 
        </Trans>
      </StyledParagraph>
      <br></br>
      <StyledParagraph>
        <Trans i18nKey='about:description.skills'>
          I specialize in
          <strong>Full-Stack</strong>
          solutions. I'm capable of solving complex problems, covering whole technological stack. From modern 
          <strong>Frontend</strong>
          and reliable 
          <strong>Backend</strong>
          to performant
          <strong>Databases</strong>
          .
        </Trans>
      </StyledParagraph>
      <br></br>
      <StyledParagraph>
        <Trans i18nKey='about:description.goals'>
          I'm constantly searching for growth opportunities and new challenges. I would love to commit fully to programming and apply my skills and knowledge as a
          <strong>Javascript Developer</strong>
          . If you have an interesting project going and could use another developer feel free to
          <a href='./' id='contact' onClick={handleClick}>reach out</a>
          to me.
        </Trans>
      </StyledParagraph>
    </BioWrapper>
  )
}

const BioWrapper = styled.div`
  strong {
    color: ${({theme}) => theme.color.offwhite};
  }
  a {
    :hover {
      border-bottom: 1px solid ${({theme}) => theme.color.neon};
    }
  }
`

const StyledParagraph = styled(Trans)`

`

export default Bio