import React from 'react'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

import Clock from './Clock'
import Quote from './Quote'
import Background from './Background'
import Overlay from './Overlay'
import Greeting from './Greeting'

const GlobalStyle = createGlobalStyle`
  ${reset};
  background-color: black;
`

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Overlay />
      <Clock />
      <Greeting />
      <Quote />
      <Background />
    </>
  )
}

export default App
