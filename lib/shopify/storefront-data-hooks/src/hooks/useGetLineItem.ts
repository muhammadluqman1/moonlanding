import { useCartItems } from './useCartItems';

export const useGetLineItem = () => {
  const cartItems = useCartItems();

  function getLineItem(variantId: string | number): ShopifyBuy.LineItem | null {
    if (cartItems.length < 1) {
      return null;
    }

    const item = cartItems.find((cartItem) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      // console.log('cartItems', cartItems);
      // console.log('cartItem.variantId', cartItem.variantId);
      // console.log('variantId', variantId);

      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      return cartItem.variant.id === variantId;
    });

    if (item == null) {
      return null;
    }

    return item;
  }

  return getLineItem;
};
