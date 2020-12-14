import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

import MainScreen from './MainScreen'
import Background from './Background'
import Overlay from './Overlay'
// import Journal from './Journal'
import Error from './Error'
// import Navbar from './Navbar'

const GlobalStyle = createGlobalStyle`
  ${reset};
  background-color: black;
`

const App = () => (
  <>
    <GlobalStyle />
    {/* <Navbar /> */}
    <Overlay />
    <Background />
    <Switch>
      <Route path="/" component={MainScreen} exact />
      {/* <Route path="/journal">
        <Journal />
      </Route> */}
      <Route component={Error} />
    </Switch>
  </>
)

export default App
