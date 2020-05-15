import React from 'react';

import { FiPlus } from 'react-icons/fi';

import { toCurrency } from '../../../helpers/util';

import { Container, ActionArea, CartButton } from './styles';

export interface ICelebrities {
  id?: number;
  name: string;
  description: string;
  price: number;
  image: string;
  handleAddCart?: () => void;
}

const ItemCard = ({
  name,
  description,
  price,
  image,
  handleAddCart,
}: ICelebrities) => {
  return (
    <Container>
      <img src={image} alt="person" />
      <div className="actionWrapper">
        <ActionArea>
          <b>{name}</b>
          <p>{description}</p>
          <p className="price">{toCurrency(price)}</p>
          <CartButton onClick={handleAddCart}>
            <FiPlus size={20} />
          </CartButton>
        </ActionArea>
      </div>
    </Container>
  );
};

export default ItemCard;
