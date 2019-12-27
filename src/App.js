import React from 'react';
import Clock from './Clock';
import Quote from './Quote';
import Background from './Background';
import Overlay from './Overlay';
import Greeting from './Greeting';
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}
  text-shadow: 2px 3px 4px rgba(0,0,0,0.40);
  /* text-shadow: 0px 4px 8px rgba(0,0,0,0.77); */
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
