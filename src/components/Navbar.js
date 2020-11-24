import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
  width: 100%;
  text-align: center;
  position: absolute;
  z-index: 1;
`
const Text = styled.h1`
  width: 100%;
  color: white;
  text-align: center;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 220;
  font-weight: 500;
  line-height: normal;
  user-select: none;
  padding-top: 2rem;
`

const Navbar = () => (
  <Container>
    <Text>
      <Link to="/">Main </Link>
      <Link to="/journal">Journal </Link>
    </Text>
  </Container>
)

export default Navbar
