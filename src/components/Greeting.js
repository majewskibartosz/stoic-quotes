import React from 'react'
import styled from 'styled-components'
import getGreeting from '../utils/getGreeting'

const Container = styled.div`
  width: 100%;
  text-align: center;
  position: relative;
  z-index: 1;
`

const Text = styled.div`
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
  top: 51%;
  left: 50%;
  transform: translate(-50%, 60%);
`

const Greet = () => (
  <Container>
    <Text>{getGreeting(new Date(Date.now()).getHours())}</Text>
  </Container>
)

export default Greet
