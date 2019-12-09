import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  position: absolute;
  z-index: auto;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min
}

class Background extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        backgrounds: [],
      };
    }

    async componentDidMount() {
      const randomImg = getRandomIntInclusive(0, 7)
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
        <Container>
          <Image src={this.state.backgrounds.url} alt=" "/>
        </Container>

      )
    }
  }
  

export default Background;