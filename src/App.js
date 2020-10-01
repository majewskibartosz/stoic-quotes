import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

import MainScreen from './Components/MainScreen'
import Background from './Components/Background'
import Overlay from './Components/Overlay'
import Journal from './Components/Journal'
import Error from './Components/Error'
import Navbar from './Components/Navbar'

const GlobalStyle = createGlobalStyle`
  ${reset};
  background-color: black;
`

const App = () => (
  <>
    <GlobalStyle />
    <Navbar />
    <Overlay />
    <Background />
    <Switch>
      <Route path="/" component={MainScreen} exact />
      <Route path="/journal" component={Journal} />
      <Route component={Error} />
    </Switch>
  </>
)

export default App
