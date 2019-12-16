import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

function Image(props) {
  return (
    <Img src={props.src} />
  )
}

export default Image;