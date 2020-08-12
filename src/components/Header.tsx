import React from 'react'
import styled from 'styled-components'

const HeaderWrapper = styled.header`
  border: 1px solid green;
  background-color: gray;
`

const Header = () => {
  return (
    <HeaderWrapper >
      ICON

      <nav>
        <ul>
          <li>PROJECTS</li>
          <li>PROJECTS</li>
          <li>PROJECTS</li>
          <li>PROJECTS</li>
        </ul>
      </nav>
    </HeaderWrapper>
  )
}

export default Header