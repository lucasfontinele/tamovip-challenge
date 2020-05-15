import { createStore, combineReducers, Store } from 'redux';

import { ICartState } from './store/cart/types';
import cart from './store/cart/reducers';

export interface ApplicationState {
  cart: ICartState;
}

const store: Store<ApplicationState> = createStore(
  combineReducers({
    cart,
  }),
);

export default store;
