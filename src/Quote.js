import React from 'react';

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
          <div key={quote.objectID}>
          <p>{quote.attributes.text}</p>  
          </div>
        )
      })
      this.setState({quotes: quotes});
      console.log("state", this.state.quotes);
    })
  }

  render() {
    return (

      <div className="App">
        <div className="container1">
          {this.state.quotes[(this.getRandomIntInclusive(1, 32))]}
        </div>
      </div>
    )
  }
}

export default Quote;