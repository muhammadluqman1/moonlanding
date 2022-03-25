import shopifyConfig from '../config/shopify';
import { getProduct } from './shopify/storefront-data-hooks/src/api/operations';

export const resolveProducts = async (productsList: string[]) => {
  let products: any[] = [];
  const promises = productsList
    .map((entry: any) => {
      return entry;
    })
    .filter((handle: string | undefined) => {
      return typeof handle === 'string';
    })
    .map(async (handle: string) => await getProduct(shopifyConfig, { handle }));
  products = await Promise.all(promises);

  // console.log('products', products);
  return products;
};
