import React from 'react'
import styled from 'styled-components'
/* eslint react/prop-types: 0 */

const Img = styled.img`
  width: 100%;
  height: 100%;
  vertical-align: bottom;
  object-fit: cover;
  background-color: black;
`

const Image = ({ src }) => <Img src={src} />

export default Image
