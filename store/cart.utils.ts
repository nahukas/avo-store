import { CartItemType } from './cart.reducer';

export const getCartSubTotal = (sum: number, item: CartItemType) => {
  sum += item.price * item.quantity;
  return sum;
};

export const getCartCount = (sum: number, item: CartItemType) =>
  sum + item.quantity;
