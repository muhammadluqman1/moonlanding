import { Select } from '@chakra-ui/react';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ShopifyBuy from 'shopify-buy';
import { useAddItemToCart } from '../../lib/shopify/storefront-data-hooks/src/hooks/useAddItemToCart';
import {
  getPrice,
  prepareProductTitle,
  prepareProuctColorName
} from '../../lib/shopify/storefront-data-hooks/src/utils/product';
import { Button } from '../components/Shared';
import { useUI } from '../components/ui/context';

interface ProductCardProps {
  product: ShopifyBuy.Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  console.log('product', product);
  const addItem = useAddItemToCart();
  const { openSidebar } = useUI();
  const formattedPrice = getPrice(product.variants[0].price, 'USD');
  const formattedCompareAtPrice = getPrice(product.variants[0].compareAtPrice, 'USD');
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setSelectedSize(e.target.value);
    // Set the price
    const matchedVariant = product.variants.filter((variant) =>
      variant.title.includes(e.target.value)
    );
    if (!matchedVariant || e.target.value == '') {
      setSelectedVariant(null);
    } else {
      setSelectedVariant(matchedVariant[0]);
    }
  };
  const handleClick = async () => {
    // Add to cart functionality
    setLoading(true);
    try {
      await addItem(selectedVariant.id, 1);
      openSidebar();
      setLoading(false);
    } catch (err) {
      setLoading(false);
      toast.error('Please select a valid option before adding to cart.');
      console.error(err);
    }
  };
  return (
    <div className="bg-white flex flex-col flex-1 items-center justify-center space-y-4">
      <div className="bg-[#F0F4F5] py-8 w-full">
        <img
          className="mx-auto h-[200px] w-auto"
          width="200"
          height="200"
          src={product.images?.[0]?.src}
        />
      </div>
      <div className="flex flex-col items-center justify-center text-center text-lg text-primary-2">
        <p className="font-futura-bold tracking-wider">{product.title}</p>
        <p className="font-futura flex items-center flex-wrap justify-center space-x-2">
          <span>{formattedPrice}</span>{' '}
          {formattedCompareAtPrice !== '$0.00' && (
            <span className="line-through text-sm">{formattedCompareAtPrice}</span>
          )}
        </p>
      </div>
      <Select
        onChange={(e) => handleChange(e)}
        rounded="full"
        placeholder="Ring size"
        name="size"
        fontSize="lg"
        textAlign="center"
        className="border-primary-2 text-primary-2 font-futura"
        id="size">
        {product.variants.map((variant) => (
          <option value={variant.title.split('/')[0].trim()} key={`variant-${variant.id}`}>
            {variant.title.split('/')[0].trim()}
          </option>
        ))}
      </Select>
      {selectedVariant === null ? (
        <Button
          textSize="text-base md:text-lg"
          full={true}
          isLoading={loading}
          onClick={handleClick}
          text="Add to Cart"></Button>
      ) : (
        <Button
          full={true}
          isLoading={loading}
          onClick={handleClick}
          textSize="text-base md:text-lg"
          text={selectedVariant?.available ? 'Add to Cart' : 'Out of Stock'}
          disabled={!selectedVariant?.available}></Button>
      )}
    </div>
  );
};

export default ProductCard;
