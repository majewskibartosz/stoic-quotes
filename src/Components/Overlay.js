import React from 'react'
import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  50% {
    opacity: 1;
    z-index: 2;
  }

  100% {
    opacity: 0;
    z-index: 0;
  }
`

const Layer = styled.div`
  display: block;
  background-color: black;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: absolute;
  z-index: 2;

  animation: 1s ${fadeIn} ease forwards;
`

const Overlay = () => <Layer />

export default Overlay
