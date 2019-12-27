import React from 'react';
import styled from 'styled-components';
import Image from './Image';

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  position: absolute;
  object-position: 50% 50%;
  z-index: auto;
`;

function Background() {
  const [photo, setPhoto] = React.useState();

  React.useEffect(() => {
    const url = 'https://source.unsplash.com/collection/137627/1280x720/daily'
    const getRandomPhoto = () => {
      const photo = (url)
      setPhoto(photo);
    };
    getRandomPhoto();
  }, []);
  return (
    <Container>
      <Image src={photo} />
    </Container>
  );
}

export default Background;