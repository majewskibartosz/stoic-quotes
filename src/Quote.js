import React from 'react';
import styled from 'styled-components';
import getRandomIntInclusive from './getRandomIntInclusive';

const Container = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  margin-bottom: 15px;
  color: rgba(255,255,255,.9);
  z-index: 1;
`;

const Text = styled.div`
  width: 100%;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: calc(14px + 1vmin);
  line-height: 1;
`;

class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      loading: false,
    };
  }

  componentDidMount() {
  fetch("https://type.fit/api/quotes")
    .then(response => {
      return response.json();
    })
    .then(data => {
      let quotes = data.map((quote) => {
        return(
          <div key={quote.id}>
          <p>"{quote.text}"</p>
          <p>- {quote.author}</p>
          </div>
        )
      })
      this.setState({quotes: quotes})
      console.log("state", this.state.quotes);
    })
    .catch(error => console.error(error));
    };

  render() {
    return (
      <Container>
        <Text>
          {this.state.quotes[(getRandomIntInclusive(1, 1643))]}
        </Text>
      </Container>
    )
  }
}

export default Quote;