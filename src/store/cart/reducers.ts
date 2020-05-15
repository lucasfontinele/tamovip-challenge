import { Reducer } from 'redux';
import { ICartState, CartActionTypes, HANDLE_CART } from './types';

const initialState = {
  cart: [],
};

const reducer: Reducer<ICartState, CartActionTypes> = (
  state = initialState,
  action: CartActionTypes,
) => {
  switch (action.type) {
    case HANDLE_CART:
      return { ...state, cart: action.payload };
    default:
      return state;
  }
};

export default reducer;
