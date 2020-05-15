import React from 'react';
import { render } from '@testing-library/react';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

// Redux
import { ICartState } from '../../store/cart/types';

import Index from '.';

describe('Index page', () => {
  const initialState = {
    cart: {
      cart: [],
    },
  };
  const mockStore = configureStore();
  const store = mockStore(initialState);

  it('should be able to add product into a cart', () => {
    console.log(store.getState());
    const { getByText } = render(
      <Provider store={store}>
        <Index />
      </Provider>,
    );
    const linkElement = getByText(/Categorias/i);
    expect(linkElement).toBeInTheDocument();
  });
});
