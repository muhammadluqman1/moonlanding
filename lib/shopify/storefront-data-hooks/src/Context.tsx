import React from 'react';
import ShopifyBuy from 'shopify-buy';

interface IContext {
  client: ShopifyBuy.Client | null;
  cart: ShopifyBuy.Cart | null;
  setCart: React.Dispatch<React.SetStateAction<ShopifyBuy.Cart | null>>;
  domain: string;
  storefrontAccessToken: string;
}

export const Context = React.createContext<IContext>({
  client: null,
  cart: null,
  domain: '',
  storefrontAccessToken: '',
  setCart: () => {
    throw Error('You forgot to wrap this in a Provider object');
  }
});
