import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Time = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1050%;
  letter-spacing: -5px;
  line-height: 1;
  color: white;
  user-select: none;
  text-align: center;
  text-shadow: 2px 3px 4px rgba(0, 0, 0, 0.3);

  position: fixed;
  top: 47%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
`

const Clock = () => {
  const [timer, setTimer] = useState({ date: new Date(Date.now()) })

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000)
    return () => {
      clearInterval(timerID)
    }
  }, [])

  const tick = () => setTimer({ date: new Date(Date.now()) })

  return (
    <Container>
      <Time>
        {timer.date.getHours()}:{timer.date.getMinutes() < 10 ? '0' : ''}
        {timer.date.getMinutes()}
      </Time>
    </Container>
  )
}

export default Clock
