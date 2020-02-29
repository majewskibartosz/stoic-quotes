import React from 'react';
import Clock from './Clock';
import Quote from './Quote';
import Background from './Background';
import Overlay from './Overlay';
import Greeting from './Greeting';
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset};
  background-color: black;
`

class App extends React.Component {
  render() {
    return(
      <>
        <GlobalStyle />
        <Overlay />
        <Clock />
        <Greeting />
        <Quote />
        <Background />
      </>
    ) 
  };
}

export default App;
