import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  width: 100%;
  height: 100%;
  vertical-align: bottom;
  object-fit: cover;
  background-color: black;
`;

const Image = props => <Img src={props.src} />

export default Image;