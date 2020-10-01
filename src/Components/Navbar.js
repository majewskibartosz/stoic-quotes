import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
  position: absolute;
  z-index: 1;
`

const Navbar = () => (
  <Container>
    <Link to="/">Main </Link>
    <Link to="/journal">Journal </Link>
  </Container>
)

export default Navbar
