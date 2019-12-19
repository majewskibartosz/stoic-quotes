import React from 'react';
import styled from 'styled-components';

const Text = styled.div`
  width: 100%;
  color: white;
  text-align: center;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 500%;
  font-weight: 500;
  line-height: normal;
  user-select: none;
`;


function Greet(props) {
  console.log(props)
  return (
    <Text>{props.time < 12 ? 'Good morning.' : 'Make it count.'}</Text>
  )
}

export default Greet;