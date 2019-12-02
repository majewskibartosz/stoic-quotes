import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  left: 25%;
  width: 50%;
  padding-top: 59vh;
  position: absolute;
  z-index: 1;
`;

const Center = styled.div`
  left: 25%;
  width: 50%;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: calc(12px + 2vmin);
  position: absolute;
`;

class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
    };
  }

  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  componentDidMount() {
    fetch('https://randomstoicquotesapi.herokuapp.com/api/v1/quotes')
    .then(data => {
      return data.json();
    }).then(results => {
      let quotes = results.data.map((quote) => {
        return(
          <div key={quote.id}>
          <p>{quote.attributes.text}</p>
          {/* <p>{quote.included}</p>   */}
          </div>
        )
      })
      this.setState({quotes: quotes});
      console.log("state", this.state.quotes);
    })
  }

  render() {
    return (

      <Container>
        <Center>
          {this.state.quotes[(this.getRandomIntInclusive(1, 32))]}
        </Center>
      </Container>
    )
  }
}

export default Quote;