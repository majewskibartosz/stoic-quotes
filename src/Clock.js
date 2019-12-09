import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: calc(20px + 15vmin);
`;

const Container = styled.div`
  left: 25%;
  width: 50%;
  height: 50%;
  top: 25%;
  text-align: center;
  margin-top: 15vh;
  position: absolute;
  z-index: 1;
`;


class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date(Date.now())};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(Date.now())
    });
  }

  render() {
    return (
      <Container>
        <Div>{this.state.date.toLocaleTimeString()}</Div>
      </Container>
    );
  }
}

export default Clock;
