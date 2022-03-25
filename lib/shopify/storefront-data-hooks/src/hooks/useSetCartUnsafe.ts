import { useContext } from 'react';
import { Context } from '../Context';

export const useSetCartUnsafe = () => {
  const { setCart } = useContext(Context);
  return setCart;
};
