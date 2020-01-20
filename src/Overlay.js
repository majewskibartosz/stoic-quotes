import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  80% {
    opacity: 1;
    z-index: 2;
  }

  100% {
    opacity: 0;
    z-index: 0;
  }
`;

const Layer = styled.div`
  display: block;
  background-color: rgba(255,255,255, 0.9);
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: absolute;
  z-index: 2;

  animation: 0.5s ${fadeIn} ease-in-out forwards;
`;

function Overlay() {
  return(
    <Layer />
  )
}

export default Overlay;