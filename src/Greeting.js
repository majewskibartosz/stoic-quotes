import React from 'react';
import styled from 'styled-components';
import { down, between } from 'styled-breakpoints';
import getGreeting from './getGreeting';

const Container = styled.div`
  width: 100%;
  top: 60%;
  text-align: center;
  position: absolute;
  z-index: 1;
`;

const Text = styled.div`
  width: 100%;
  color: white;
  text-align: center;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 500%;
  font-weight: 500;
  line-height: normal;
  user-select: none;

  ${down('tablet')} {
    font-size: 300%;
  }

  ${between('tablet', 'desktop')} {
    font-size: 450%;
  }
`;

function Greet() {
  return (
    <Container>
      <Text>{getGreeting(new Date(Date.now()).getHours())}</Text>
    </Container>
  );
}

export default Greet;