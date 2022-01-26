import React from "react"
import styled from "styled-components"
import Button from "../Atoms/Button"

const Modal = ({show, children, handler}) => {
  return (
    <ModalOverlay show={show}>
      <ModalBody>
        {children}
        <Button onClick={handler}>CLOSE</Button>
      </ModalBody>
    </ModalOverlay>
  )
}

const ModalOverlay = styled.div<{show: boolean}>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(1,1,1,.4);
  display: ${props => props.show ? 'block' : 'none'};
`

const ModalBody = styled.section`
  position: fixed;
  display: flex;
  flex-direction: column;
  border-radius: ${({theme}) => theme.spacing.l};
  border: 2px solid ${({theme}) => theme.color.neon};
  max-width: 50vw;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: ${({theme}) => theme.spacing.l};
`

export default Modal