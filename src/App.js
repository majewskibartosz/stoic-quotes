import React from 'react';
import Clock from './Clock';
import Quote from './Quote';
import Background from './Background';
import Overlay from './Overlay';
import styled from 'styled-components';
import { Reset } from 'styled-reset'

const GlobalStyle = styled.div`
  text-shadow: 2px 3px 4px rgba(0,0,0,0.40);
  /* text-shadow: 0px 4px 8px rgba(0,0,0,0.77); */
`;

class App extends React.Component {
  render() {
    return(
      <GlobalStyle>
        <Overlay />
        <Reset />
        <Clock />
        <Quote />
        <Background />
      </GlobalStyle>
    ) 
  };
}

export default App;
