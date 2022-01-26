import React, { useContext } from 'react'
import styled from 'styled-components'
import { Trans } from 'react-i18next'
import {ScrollContext} from '../../ctx/Scroll'

import {ReactComponent as Mail} from '../../assets/icons/mail.svg'
import {ReactComponent as About} from '../../assets/icons/person.svg'
import {ReactComponent as Projects} from '../../assets/icons/projects.svg'

const Menu = () => {
  const ctx = useContext(ScrollContext)

  return (
    <MenuWrapper>
      <StyledUL>        
        <StyledLI onClick={ctx.scrollTo} className={ctx.activeLink === 'projects' ? 'active' : undefined} id='projects'>
          <Projects id='projects' className='icon'/>
          <Trans i18nKey='nav:projects' ></Trans>
        </StyledLI>

        <StyledLI onClick={ctx.scrollTo} className={ctx.activeLink === 'about' ? 'active' : undefined} id='about'>
          <About id='about' className='icon'/>
          <Trans i18nKey='nav:about' ></Trans>          
        </StyledLI>

        <StyledLI onClick={ctx.scrollTo} className={ctx.activeLink === 'contact' ? 'active' : undefined} id='contact'>
          <Mail id='contact' className='icon'/>
          <Trans i18nKey='nav:contact' ></Trans>          
        </StyledLI>
      </StyledUL>
    </MenuWrapper>
  )
}

const MenuWrapper = styled.menu`
  cursor: pointer;
  height: 50px;
  margin-left: auto;
  font-family: ${({theme})=>theme.font.accent};
  letter-spacing: 2px;
  justify-content: space-around;
  align-items: center;
  position: relative;
`
const StyledUL = styled.ul`
  display: flex;
  list-style: none;
  margin: 0px;
  transition: all .3s ease-in;

  .active {
    color: ${({theme})=>theme.color.neon};

    .icon {
      fill: ${({theme})=>theme.color.neon};
    }
  }
`
const StyledLI = styled.li`
  font-size: ${({theme}) => theme.fontSize.caption};
  height: 44px;
  margin: 3px 5px 3px 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  transition: all .3s;

  &:hover {
    color: ${({theme})=>theme.color.neon};
    filter: url(#glow);

    .icon {
      fill: ${({theme})=>theme.color.neon};
    }
  }

  .border {
    position: absolute;
    width: 30%;
    height: 40px;
    bottom: 0;
    stroke: ${({theme})=>theme.color.neon};
  }

  .icon {
    fill: ${({theme})=>theme.color.offwhite};
    margin: auto;
    width: 20px;
    margin-right: 3px;
  }

  @media screen and (max-width: 650px) {
    font-size: 0;
  }  
`

export default Menu