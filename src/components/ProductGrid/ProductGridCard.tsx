import React, { useState } from 'react';
import ShopifyBuy from 'shopify-buy';
import {
  getPrice,
  prepareProuctColorName
} from '../../../lib/shopify/storefront-data-hooks/src/utils/product';
import { Button } from '../../components/Shared';

interface ProductGridCardProps {
  product: ShopifyBuy.Product;
  image: any;
  showButton: boolean;
}

const ProductGridCard: React.FC<ProductGridCardProps> = ({ product, image, showButton }) => {
  const formattedPrice = getPrice(product.variants[0].price, 'USD');
  const formattedCompareAtPrice = getPrice(product.variants[0].compareAtPrice, 'USD');
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    window.location.href = `https://${process.env.NEXT_PUBLIC_SHOPIFY_API_URL}/products/${product.handle}`;
  };

  return (
    <div id={slice.slice_type}>
    <div className="bg-white p-4 flex flex-col items-center justify-center space-y-4 relative">
      <div className="bg-gray-500 bg-opacity-40 py-8 w-full">
        <img className="mx-auto" width="200" height="200" src={image ? image.image.url : product.images?.[0]?.src} alt={product.title} />
      </div>
      <div className="flex flex-col items-center justify-center text-center text-lg text-primary-2">
        <p className="font-sans font-bold tracking-wider">{prepareProuctColorName(product.title)}</p>
        <p className="font-sans flex items-center flex-wrap justify-center space-x-2">
          <span>{formattedPrice}</span>{' '}
          {formattedCompareAtPrice !== '$0.00' && (
            <span className="line-through text-sm">{formattedCompareAtPrice}</span>
          )}
        </p>
      </div>
      {showButton ? 
      <Button
        full={true}
        isLoading={loading}
        onClick={handleClick}
        textSize="text-base md:text-lg"
        text={'Shop Now'}></Button> : null}
    </div>
    </div>
  );
};

export default ProductGridCard;