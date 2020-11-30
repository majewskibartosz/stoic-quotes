/* eslint-disable no-undef */
import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import EdiText from 'react-editext'
import { fadeIn } from 'react-animations'

// Animations
const fadeInAnimation = keyframes`${fadeIn}`

const StyledNote = styled(EdiText)`
  button {
    border-radius: 2px;
  }
  button[editext='edit-button'] {
    color: #000;
    width: 40px;
  }
  button[editext='save-button'] {
    width: 40px;
    &:hover {
      background: greenyellow;
    }
  }
  button[editext='cancel-button'] {
    &:hover {
      background: crimson;
      color: #fff;
    }
  }
  input,
  textarea {
    background: white;
    color: #000000;
    font-weight: bold;
    border-radius: 5px;
  }
  div[editext='view-container'] {
    background: rgba(0, 0, 0, 0.185);
    padding: 15px;
    border-radius: 5px;
    color: #fff;
    width: 50%;
    max-width: 30%;
    position: fixed;
    top: 37%;
    left: 50%;
    transform: translate(-50%, 60%);
  }
  div[editext='edit-container'] {
    background: rgba(0, 0, 0, 0.185);
    padding: 15px;
    border-radius: 5px;
    color: #fff;
    width: 50%;
    max-width: 30%;
    position: fixed;
    top: 37%;
    left: 50%;
    transform: translate(-50%, 60%);
  }
`
const Container = styled.div`
  width: 100%;
  text-align: center;
  position: relative;
  z-index: 1;
`
const Text = styled.h1`
  animation: 3s ${fadeInAnimation};
  width: 100%;
  color: white;
  text-align: center;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 350%;
  font-weight: 500;
  line-height: normal;
  user-select: none;
  text-shadow: 2px 3px 4px rgba(0, 0, 0, 0.3);

  position: fixed;
  top: 37%;
  left: 50%;
  transform: translate(-50%, 60%);
`

const Note = (props) => {
  const [value, setValue] = useState('What is real? How do you define real?')

  const handleSave = (val) => {
    console.log('Edited Value -> ', val)
    setValue(val)
  }
  return (
    <div className="container">
      <EdiText type="text" value={value} onSave={handleSave} />
    </div>
  )
}

const Journal = () => (
  <Container>
    <Text>
      This is Journal.
      <StyledNote>
        <Note />
      </StyledNote>
    </Text>
  </Container>
)

export default Journal
