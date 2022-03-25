import { buildClient } from 'shopify-buy';

export function getProduct(config: ShopifyBuy.Config, options: { id?: string; handle?: string }) {
  const client = buildClient(config);
  if (options.handle) {
    return client.product.fetchByHandle(options.handle);
  }
  if (!options.id) {
    throw new Error('A product ID or handle is required');
  }
  return client.product.fetch(options.id);
}
