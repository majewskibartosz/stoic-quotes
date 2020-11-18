import React from 'react'
import styled, { css, keyframes } from 'styled-components'

const Container = styled.div`
  width: 100%;
  text-align: center;
  position: relative;
  z-index: 1;
`
const Text = styled.h1`
  width: 100%;
  color: white;
  text-align: center;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 350%;
  font-weight: 500;
  line-height: normal;
  user-select: none;
  text-shadow: 2px 3px 4px rgba(0, 0, 0, 0.3);

  position: fixed;
  top: 37%;
  left: 50%;
  transform: translate(-50%, 60%);
`

const pulse = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const animation = (props) =>
  css`
    ${pulse} ${props.animationLength} infinite alternate;
  `

const PulseButton = styled.button`
  animation: ${animation};
`

const Journal = () => (
  <Container>
    <Text>
      This is Journal
      <PulseButton />
    </Text>
  </Container>
)

export default Journal
