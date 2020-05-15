import React from 'react';

import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { ApplicationState } from '../../reduxStore';

import { Container, Search, SearchWrapper, CartContainer } from './styles';

// assets
import logoImg from '../../static/images/Logo.svg';
import searchImg from '../../static/images/search.svg';
import cartImg from '../../static/images/cart.svg';

const Header: React.FC = () => {
  const { cart } = useSelector((state: ApplicationState) => state.cart);

  return (
    <Container>
      <Link to="/">
        <img src={logoImg} alt="Ladies" />
      </Link>
      <div className="search-area">
        <SearchWrapper>
          <Search placeholder="Procurar" />
          <img src={searchImg} alt="search" />
        </SearchWrapper>
        <CartContainer to="/cart">
          <img src={cartImg} alt="Cart" />
          <b className="price">{cart.length}</b>
        </CartContainer>
      </div>
    </Container>
  );
};

export default Header;
