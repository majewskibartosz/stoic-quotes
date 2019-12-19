import React from 'react';
import styled from 'styled-components';

import Image from './Image';
import getRandomIntInclusive from './getRandomIntInclusive';

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  position: absolute;
  z-index: auto;
`;

function Background() {
  const [photo, setPhoto] = React.useState();

  React.useEffect(() => {
    const randomInt = getRandomIntInclusive(1, 100)
    const getRandomPhoto = () => {
      const photo = (`https://source.unsplash.com/collection/2281806/${randomInt}`)
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