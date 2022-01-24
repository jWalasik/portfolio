import styled, { keyframes } from "styled-components"

interface FaderProps {
  out: boolean,
}

export const FadeAnimation = styled.div<FaderProps>`
  visibility: ${props => props.out ? 'hidden' : 'visible'};
  animation: ${props => props.out ? fadeOut : fadeIn} 2s ease-out;
  transition: visibility 2s linear;
`

const fadeOut = keyframes`
  50% {
    opacity: 1
  }
  to {
    opacity: 0
  }
`
const fadeIn = keyframes`
  0% {
    opacity: 0
  }
  50% {
    opacity: 1
  }
  100% {
    opacity: 1
  }
`

export default FadeAnimation