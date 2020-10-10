/* eslint-disable react/prop-types */
import React from 'react'

import Quotes from './Quotes'
import Clock from './Clock'
import Greeting from './Greeting'

const MainScreen = () => (
  <div>
    <Clock />
    <Greeting />
    <Quotes useCache />
  </div>
)

export default MainScreen
