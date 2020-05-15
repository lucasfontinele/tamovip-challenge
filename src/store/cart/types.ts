export const HANDLE_CART = 'HANDLE_CART';

export interface ICelebrities {
  id?: number;
  name: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
}

export interface ICartState {
  cart: ICelebrities[];
}

interface HandleCartAction {
  type: typeof HANDLE_CART;
  payload: ICelebrities[];
}

export type CartActionTypes = HandleCartAction;
