import React from 'react';

import { Container } from './styles';

// assets
import soccerImg from '../../../static/images/soccer-ball.jpg';

const CategoryCard = () => {
  return (
    <Container>
      <img src={soccerImg} alt="category" />
      <div>
        <b>Futebol</b>
        <p>Jogadores de futebol</p>
      </div>
    </Container>
  );
};

export default CategoryCard;
