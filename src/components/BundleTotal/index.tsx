import React from 'react';
import { useCart } from '../../../lib/shopify/storefront-data-hooks';
import { Button } from '../Shared';
import { Container } from '../Slice';
import { useUI } from '../../components/ui/context';

interface BundleTotalProps {}

const BundleTotal: React.FC<BundleTotalProps> = ({}) => {
  const cart = useCart();

  const { openSidebar } = useUI();
  const subTotal = cart?.subtotalPrice;
  const cartCount = cart?.lineItems.length || 0;
  // console.log('cart', cart);
  const getPercentDiscount = (pnew, pold) => {
    const discount = ((parseFloat(pold) - parseFloat(pnew)) / parseFloat(pold)) * 100;
    return discount.toFixed(0);
  };
  return (
    <Container>
      <div className="px-8 py-8 bg-bg-light-blue bg-opacity-40 space-y-4 flex flex-col items-center justify-center md:w-96 max-w-3xl">
        <p className="font-futura-bold font-semibold text-5xl text-primary-2 text-center">
          Your Bundle
        </p>
        <div className="w-full flex flex-col space-y-0 items-center justify-center">
          <p className="font-futura-bold text-primary-2 text-xl">
            {cartCount} Rings{' '}
            {cart?.subtotalPriceV2.amount !== cart?.lineItemsSubtotalPrice.amount && (
              <>
                {' '}
                |{' '}
                {getPercentDiscount(
                  cart?.subtotalPriceV2.amount,
                  cart?.lineItemsSubtotalPrice.amount
                )}
                % Off
              </>
            )}
          </p>
          <p className="font-futura font-medium text-primary-2 text-xl">
            {cart?.subtotalPriceV2.amount !== cart?.lineItemsSubtotalPrice.amount && (
              <span className="line-through mr-2">
                ${parseFloat(cart?.lineItemsSubtotalPrice.amount)}
              </span>
            )}{' '}
            ${cart?.subtotalPrice}
          </p>
        </div>
        {cartCount > 0 && <Button full={true} text="Check Out" onClick={openSidebar}></Button>}
        <Button
          bgColor="bg-white"
          bgHoverColor="hover:bg-primary-2"
          textColor="text-primary-2"
          textHoverColor="hover:text-white"
          className="border-2 border-solid border-primary-2"
          text="Add More Rings"
          full={true}
          behavior="scroll"
          url="#stacks"></Button>
      </div>
    </Container>
  );
};

export default BundleTotal;
