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
  object-fit: cover;
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
        photos: [],
        
      };
    }

    componentDidMount() {
      this.getRandomImg();
    }

    async getRandomImg() {
      const url = './.netlify/functions/images'

      try {
        const response = await axios.get(url);
        if (response.status !== 200) {
          throw Error(response.statusText)
        }
        let data = await response.data
        this.setState({photos: data.urls.regular});
        console.log(data)

      } catch(error) {
        console.error(error);
      }
    }

    render() {
      return(
        <Container>
          <Image src={this.state.photos} alt=" "/>
        </Container>

      )
    }
  }
  

export default Background;