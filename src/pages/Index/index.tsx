import React from 'react';

import {
  Container,
  Header,
  Search,
  SearchWrapper,
  ContentWrapper,
} from './styles';

import CategoryCard from './CategoryCard';

// assets
import logoImg from '../../static/images/Logo.svg';
import searchImg from '../../static/images/search.svg';
import cartImg from '../../static/images/cart.svg';

const IndexPage: React.FC = () => {
  return (
    <Container>
      <Header>
        <img src={logoImg} alt="Ladies" />
        <div className="search-area">
          <SearchWrapper>
            <Search placeholder="Procurar" />
            <img src={searchImg} alt="search" />
          </SearchWrapper>
          <img src={cartImg} alt="Cart" />
        </div>
      </Header>
      <ContentWrapper>
        <div>
          <h1>Mais pedidos</h1>
        </div>
        <div className="categories">
          <h3>Categorias</h3>
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </div>
      </ContentWrapper>
    </Container>
  );
};

export default IndexPage;
