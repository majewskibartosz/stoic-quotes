import React from 'react';
import styled from 'styled-components';
import Greeting from './Greeting'

const Time = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  /* font-size: 20vmin; */
  font-size: 1250%;
  letter-spacing: -5px;
  color: white;
  user-select: none;
`;

const Container = styled.div`
  /* left: 25%; */
  width: 100%;
  height: 50%;
  top: 20%;
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
      60000
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
        <Time>
          {this.state.date.getHours()}:
          {this.state.date.getMinutes() < 10 ? '0' : ''}
          {this.state.date.getMinutes()}
        </Time>
        <Greeting time={this.state.date.getHours()}/>
      </Container>
    );
  }
}

export default Clock;
