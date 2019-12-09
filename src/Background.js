import React from 'react';
import axios from 'axios';
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
        const response = await axios.get(url);
        let data = response.data;
        // const json = await response.json();
        this.setState({backgrounds: data.url});
      } catch (error) {
        console.error(error);
      }
    }

    render() {
      return(
        <Container>
          <Image src={this.state.backgrounds} alt=" "/>
        </Container>

      )
    }
  }
  

export default Background;