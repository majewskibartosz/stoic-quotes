import React from 'react';

class Background extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        backgrounds: [],
      };
    }

    getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min
    }

    async componentDidMount() {
      const randomImg = this.getRandomIntInclusive(0, 7)
      const url = `https://bing.biturl.top/?resolution=1920&format=json&index=${randomImg}&mkt=en-UK`

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw Error(response.statusText)
        }
        const json = await response.json();
        this.setState({backgrounds: json});
      } catch (error) {
        console.log(error);
      }

    }

    render() {
      return(
        <div>
          <img src={this.state.backgrounds.url} alt=" " />
        </div>
      )
    }
  }
  

export default Background