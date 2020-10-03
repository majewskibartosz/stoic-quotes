import React from 'react'
import styled from 'styled-components'

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

const Error = () => (
  <Container>
    <Text>Oops! Page not found!</Text>
  </Container>
)

export default Error
