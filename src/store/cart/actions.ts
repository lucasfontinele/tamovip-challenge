import { HANDLE_CART, CartActionTypes, ICelebrities } from './types';

export function handleCart(cart: ICelebrities[]): CartActionTypes {
  return {
    type: HANDLE_CART,
    payload: cart,
  };
}
