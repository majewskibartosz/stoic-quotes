
import React from 'react'
import styled, { css, keyframes } from 'styled-components'
import EdiText from 'react-editext'


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
`
const SharedPosition = styled.div`
  text-shadow: 2px 3px 4px rgba(0, 0, 0, 0.3);

  position: fixed;
  top: 37%;
  left: 50%;
  transform: translate(-50%, 60%);
// const pulse = keyframes`
//   0% {
//     opacity: 0;
//   }
//   100% {
//     opacity: 1;
//   }
// `

// const animation = (props) =>
//   css`
//     ${pulse} ${props.animationLength} infinite alternate;
//   `

// const PulseButton = styled.button`
//   animation: ${animation};
//   width: 33.3px;
//   height: 3em;
// `
// const onClickHandler = () => {
//   console.log('came from pulse button as a click handler')
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

  </Container>
)

export default Journal
