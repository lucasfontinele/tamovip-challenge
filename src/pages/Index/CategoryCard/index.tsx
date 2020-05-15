import React from 'react';

import { Container } from './styles';

import { ICelebrities } from '../ItemCard';

export interface Categories {
  id?: number;
  name: string;
  description: string;
  image: string;
  selected?: boolean;
  handleClick?: () => void;
  celebrities: ICelebrities[];
}

const CategoryCard = ({
  name,
  description,
  image,
  selected,
  handleClick,
}: Categories) => {
  return (
    <Container selectedItem={selected} onClick={handleClick}>
      <img src={image} alt="category" />
      <div>
        <b>{name}</b>
        <p>{description}</p>
      </div>
    </Container>
  );
};

export default CategoryCard;
