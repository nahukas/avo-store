import { cartActionTypes } from './cart.types';

export type CartAction = {
  type: cartActionTypes.ADD_ITEM | cartActionTypes.REMOVE_ITEM;
  item: TProduct;
  quantity?: number;
};
