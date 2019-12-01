import React from 'react';
import Clock from './Clock';
import Quote from './Quote';
import Background from './Background';

import './App.css';


class App extends React.Component {
  render() {
    return(
      <>
        <Clock />
        <Quote />
        <Background />
      </>
    ) 
  }
}

export default App;
