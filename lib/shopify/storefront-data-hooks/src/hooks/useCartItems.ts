import { useContext } from 'react';
import { Context } from '../Context';

export const useCartItems = () => {
  const { cart } = useContext(Context);
  if (!cart || !Array.isArray(cart.lineItems)) {
    return [];
  }

  return cart.lineItems;
};
