import React from 'react'
import styled from 'styled-components'

import {ReactComponent as Bevel} from '../assets/bevel.svg'
import {ReactComponent as Line} from '../assets/line.svg'

const BeveledBorder = () => {
  return (
    <BorderWrapper>
      <StyledBevel />
      <StyledLine />
      <StyledLine vertical='true'/>
    </BorderWrapper>
  )
}

const BorderWrapper = styled.div`
  svg {
    filter: url(#glow)
  }
`

const StyledBevel = styled(Bevel)`
  position: absolute;
  overflow: visible;
  width: 25px;
  height: 25px;
  bottom: 0;
  right: 0;
  stroke: ${({theme})=>theme.color.neon};
`

const StyledLine = styled(Line).attrs(props => {

})`
  stroke: url(#faded-line);
  position: absolute;
  overflow: visible;
  width: ${props => props.vertical ? '25px' : '80%'};
  height: 1px;
  bottom: ${props => props.vertical ? '24px' : '0px'};;
  right: ${props => props.vertical ? '-13px' : '12.5px'};
  filter: url(#glow);
  ${props => props.vertical && `
    transform: rotate(90deg);
  `}

  #faded-line {
    --color-0: ${({theme})=> theme.color.bgMain};
    --color-100: ${({theme})=> theme.color.neon};
  }
  #faded-line-neg {
    --color-0: ${({theme})=> theme.color.bgMain};
    --color-100: ${({theme})=> theme.color.negative};
  }
`

export default BeveledBorder