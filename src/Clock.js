import React from 'react';
import styled from 'styled-components';

const Time = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1050%;
  letter-spacing: -5px;
  line-height: 1;
  color: white;
  user-select: none;
  text-align: center;
  text-shadow: 2px 3px 4px rgba(0,0,0,0.30);

  position: fixed;
  top: 47%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
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
        <Time>
          {this.state.date.getHours()}:
          {this.state.date.getMinutes() < 10 ? '0' : ''}
          {this.state.date.getMinutes()}
        </Time>
      </Container>
    );
  };
}

export default Clock;
