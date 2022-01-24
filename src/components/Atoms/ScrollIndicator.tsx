import styled, {keyframes} from "styled-components";
import BackgroundText from "./BackgroundText";

const ScrollIndicator = styled(BackgroundText)`
  writing-mode: vertical-lr;
  grid-area: 4/3/5/3;
  margin: ${({theme}) => theme.spacing.m};
  margin-left: auto;
  font-size: ${({theme}) => theme.fontSize.caption};
  opacity: .5;

  &:after {
    content: '';
    display: block;
    grid-area: 2/3/4/3;
    background: linear-gradient(transparent, rgb(40, 255, 40), transparent);
    width: 2px;
    height: 50px;
    animation: ${props => slide} 2s linear infinite;
    filter: url(#glow);
    margin-left: calc(-25% - 1px);
    margin-top: 100%;
  }
  @media ${({theme}) => theme.breakpoints.mobile} {
    grid-area: 5/1/5/3;
    writing-mode: initial;
    margin: auto;

    &:after {
      margin-left: 50%;
      margin-top: 0;
    }
  }
`
const slide = keyframes`
  0% {
    transform-origin: top;
    transform: scaleY(0);
  }
  50% {
    transform-origin: top;
    transform: scaleY(1);
  }
  51% {
    transform-origin: bottom;
    transform: scaleY(1);
  }
  100% {
    transform-origin: bottom;
    transform: scaleY(0);
  }
`

export default ScrollIndicator