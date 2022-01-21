import React, { Dispatch, useContext, useReducer } from 'react';

import { cartActionTypes } from './cart.types';
import { CartAction } from './cart.actions';
import cartReducer, { CartState } from './cart.reducer';
import { getCartCount, getCartSubTotal } from './cart.utils';

const defaultState = {} as CartState;

const CartItemsContext = React.createContext(defaultState);
const CartDispatchContext = React.createContext(
  (() => {}) as Dispatch<CartAction>
);

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, defaultState);

  return (
    <CartItemsContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartItemsContext.Provider>
  );
};

export const useCart = () => {
  const itemsById = useContext(CartItemsContext);
  const items = Object.values(itemsById);

  const count = items.reduce(getCartCount, 0);
  const subTotal = items.reduce(getCartSubTotal, 0);

  return {
    items,
    itemsById,
    count,
    subTotal
  };
};

export const useCartMutations = () => {
  const dispatch = useContext(CartDispatchContext);

  const addToCart = (product: TProduct, quantity?: number) =>
    dispatch({
      type: cartActionTypes.ADD_ITEM,
      item: product,
      quantity
    });

  const removeFromCart = (product: TProduct) =>
    dispatch({
      type: cartActionTypes.REMOVE_ITEM,
      item: product
    });

  return {
    addToCart,
    removeFromCart
  };
};

export default CartProvider;
