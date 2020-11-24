/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
import React from 'react'
import Quotes from './Quotes'
import Clock from './Clock'
import Greeting from './Greeting'

const MainScreen = () => (
  <>
    <Clock />
    <Greeting />
    <Quotes useCache />
  </>
)

export default MainScreen
