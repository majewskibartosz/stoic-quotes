import React from 'react';
import styled from 'styled-components';
import getRandomIntInclusive from './getRandomIntInclusive';

const Container = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  margin-bottom: 0px;
  color: rgba(255,255,255,.9);
  z-index: 1;
  text-shadow: 2px 3px 4px rgba(0,0,0,0.30);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-18px);
  }
`;

const Text = styled.div`
  width: 100%;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: calc(10px + 1vmin);
  line-height: 1.1;
`;

const Link = styled.a`
  color: rgba(255,255,255,.9);
  text-decoration: none;
  font-size: calc(8px + 1vmin);
  
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s linear 0.5s, opacity 0.3s;

  ${Container}:hover & {
    visibility: visible;
    opacity: 0.8;
    transition: visibility 0s linear 0s, opacity 0.3s;
  }
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
  fetch('https://type.fit/api/quotes')
    .then(response => {
      return response.json();
    })
    .then(data => {
      let quotes = data.map((quote) => {
        return(
          <div key={quote.id}>
          <p>"{quote.text}"</p>
          <Link 
            href={`https://en.wikipedia.org/wiki/${quote.author}`}
            target="_blank"
            rel="noopener noreferrer">
            {quote.author}
          </Link>
          </div>
        )
      })
      this.setState({quotes: quotes})
    })
    .catch(error => console.error(error));
    };

  render() {
    return (
      <Container>
        <Text>
          {this.state.quotes[(getRandomIntInclusive(1, this.state.quotes.length))]}
        </Text>
      </Container>
    )
  };
}

export default Quote;