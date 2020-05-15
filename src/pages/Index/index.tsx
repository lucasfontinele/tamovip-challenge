import React, { useState } from 'react';

import Slider from 'react-slick';
import { useDispatch, useSelector } from 'react-redux';

import { handleCart } from '../../store/cart/actions';
import { ApplicationState } from '../../reduxStore';

import MainLayout from '../../layouts/Main';
import { ContentWrapper } from './styles';

import CategoryCard from './CategoryCard';
import ItemCard, { ICelebrities } from './ItemCard';

import categories from './mock';

// Slick css
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const IndexPage = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state: ApplicationState) => state.cart);

  const [selectedCategory, setSelectedCategory] = useState(-1);

  const settings = {
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 2,
    speed: 500,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  function handleClick(index: number): void {
    setSelectedCategory(index);
  }

  function handleAddCart(item: ICelebrities) {
    let oldCart = [...cart];
    const index = oldCart.findIndex((celebrity) => celebrity.id === item.id);

    if (index > -1) {
      oldCart[index].quantity += 1;

      dispatch(handleCart(oldCart));

      return;
    }
    oldCart.push({ ...item, quantity: 1 });

    dispatch(handleCart(oldCart));
  }

  return (
    <MainLayout>
      <ContentWrapper>
        <div>
          <h1>Mais pedidos</h1>
          {selectedCategory === -1 && <p>Selecione uma categoria</p>}
          {categories[selectedCategory]?.celebrities?.length === 0 && (
            <p>Esta categoria não tem celebridades</p>
          )}
          <div className="itemsContainer">
            {categories[selectedCategory]?.celebrities?.length > 0 && (
              <Slider {...settings}>
                {categories[selectedCategory]?.celebrities?.map((celebrity) => (
                  <ItemCard
                    key={celebrity.id}
                    name={celebrity.name}
                    description={celebrity.description}
                    price={celebrity.price}
                    image={celebrity.image}
                    handleAddCart={() => handleAddCart(celebrity)}
                  />
                ))}
              </Slider>
            )}
          </div>
        </div>
        <div className="categories">
          <h3>Categorias</h3>
          {categories.map((category, index) => (
            <CategoryCard
              key={category.id}
              name={category.name}
              description={category.description}
              image={category.image}
              handleClick={() => handleClick(index)}
              selected={index === selectedCategory}
              celebrities={category.celebrities}
              data-testid="categories-node"
            />
          ))}
        </div>
      </ContentWrapper>
    </MainLayout>
  );
};

export default IndexPage;
