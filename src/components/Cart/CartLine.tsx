import { Spinner } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useRemoveItemFromCart } from '../../../lib/shopify/storefront-data-hooks';
import {
  prepareProductTitle,
  prepareProuctColorName
} from '../../../lib/shopify/storefront-data-hooks/src/utils/product';

interface CartLineProps {
  product: any;
}

const CartLine: React.FC<CartLineProps> = ({ product }) => {
  const [loading, setLoading] = useState(false);

  const removeItemFromCart = useRemoveItemFromCart();
  return (
    <div className="grid gap-2 grid-cols-12 justify-start my-6">
      <div className="col-span-3 bg-bg-light-blue bg-opacity-40 flexitems-center justify-center py-4 px-4">
        <img
          style={{ width: 75, height: 75, objectFit: 'cover' }}
          className="mx-auto"
          src={product.variant.image.src}
        />
      </div>
      <div className="flex flex-col items-start justify-start col-span-6">
        <span className="font-base text-primary-2 font-futura">
          {prepareProductTitle(product.title)}
        </span>
        <span className="font-base text-primary-2 font-futura">
          Color: {prepareProuctColorName(product.title)}
        </span>
        <span className="font-base text-primary-2 font-futura">
          Ring Size: {product.variant.title.split('/')[0].trim()}
        </span>
        <span className="font-base text-primary-2 font-futura">Qty: {product.quantity}</span>
        <p className="font-base font-base font-futura text-primary-1">${product.variant.price}</p>
      </div>
      <div
        className="col-span-3 h-full flex items-end justify-end cursor-pointer underline font-base text-primary-2 opacity-30 font-futura font-medium"
        onClick={() => {
          setLoading(true);
          removeItemFromCart(product.variant.id);
        }}>
        Remove
      </div>
    </div>
  );
};

export default CartLine;
