import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import EdiText from 'react-editext'
import 'typeface-roboto'

const Container = styled.div`
  width: 100%;
  text-align: center;
  position: relative;
  z-index: 1;
`
const Text = styled.h1`
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
// const Example = (props) => {
//   const [value, setValue] = useState('What is real? How do you define real?')

//   const handleSave = (val) => {
//     console.log('Edited Value -> ', val)
//     setValue(val)
//   }
//   return (
//     <Container>
//       <Text>
//         <EdiText type="text" value={value} onSave={handleSave} />{' '}
//       </Text>
//     </Container>
//   )
// }

// const fadeOut = keyframes`
//   100% {
//     opacity: 1;

//   }
//   100% {
//     opacity: 0;
//   }
// `

// const FadeOutButon = styled.button`
//   animation: 1s ${fadeIn} ease-out;
// `

const Journal = () => (
  <Container>
    <Text>This is Journal.</Text>
    {/* <Example></Example> */}
  </Container>
)

export default Journal
