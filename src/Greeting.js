import React from 'react';
import styled from 'styled-components';
import getGreeting from './getGreeting';

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
  return (
      <Text>{getGreeting(props.time)}</Text>
  );
}

export default Greet;