import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  useDisclosure
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useCheckoutUrl, useCart } from '../../../lib/shopify/storefront-data-hooks';
import { Button } from '../Shared';
import { useUI } from '../ui/context';
import CartLine from './CartLine';
import { ProgressBar } from 'react-step-progress-bar';
import DiscountProgress from './DiscountProgress';

interface indexProps {}

const index: React.FC<indexProps> = ({}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { displaySidebar, closeSidebar } = useUI();
  const btnRef = React.useRef();
  const checkoutUrl = useCheckoutUrl();
  const cart = useCart();
  const subTotal = cart?.subtotalPrice;
  const total = ' - ';

  const items = cart?.lineItems ?? [];
  const discountEleigibleItems = items.filter((item) => {
    if (item.variant.compareAtPrice == null) {
      return item;
    }
  });
  let discountElibleQty = 0;
  discountEleigibleItems.forEach((item) => {
    discountElibleQty += item.quantity;
  });
  const isEmpty = items.length == 0;

  const getPercentDiscount = (pnew, pold) => {
    const discount = ((parseFloat(pold) - parseFloat(pnew)) / parseFloat(pold)) * 100;
    return discount.toFixed(0);
  };

  // useEffect(() => {
  //   async function fetchContent() {
  //     const items = cart?.lineItems || []
  //   }
  // }, [cart?.lineItems])
  return (
    <>
      <Drawer
        isOpen={displaySidebar}
        placement="right"
        onClose={closeSidebar}
        finalFocusRef={btnRef}
        size="md">
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
              <p className="font-futura text-3xl tracking-widesr text-primary-2">Your Stack</p>
            </DrawerHeader>

            <DrawerBody>
              {isEmpty && (
                <div className="items-center justify-center flex h-full flex-col space-y-4">
                  <p className="font-futura font-medium text-2xl">Your Stack is empty.</p>
                  <Button
                    text="Start stacking!"
                    bgColor="bg-primary-2"
                    bgHoverColor="hover:bg-white"
                    textColor="text-white"
                    textHoverColor="hover:text-primary-2"
                    className="border-2 border-solid border-primary-2"
                    onClick={closeSidebar}></Button>
                </div>
              )}
              {!isEmpty && (
                <div>
                  {/* <DiscountProgress eligibleItems={discountElibleQty} /> */}
                  {items.map((item: any) => (
                    <CartLine product={item} />
                  ))}
                </div>
              )}
            </DrawerBody>
            {!isEmpty && (
              <DrawerFooter>
                {/* <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button color="blue">Save</Button> */}
                <div className="flex flex-col w-full items-start justify-center space-y-4">
                  <div className="flex items-center space-x-3">
                    <p className="leading-none uppercase font-futura tracking-wider font-medium">
                      Total Price{' '}
                    </p>
                    <p className="leading-none text-primary-1 font-futura-bold font-semibold text-xl">
                      ${subTotal}
                    </p>
                    {cart?.subtotalPriceV2.amount !== cart?.lineItemsSubtotalPrice.amount && (
                      <p className="leading-none font-futura tracking-normal font-medium">
                        <span className="line-through">${cart?.lineItemsSubtotalPrice.amount}</span>{' '}
                        $
                        {getPercentDiscount(
                          cart?.subtotalPriceV2.amount,
                          cart?.lineItemsSubtotalPrice.amount
                        )}
                        % off
                      </p>
                    )}
                  </div>
                  <Button
                    full={true}
                    bgColor="bg-primary-2"
                    bgHoverColor="hover:bg-white"
                    textColor="text-white"
                    textHoverColor="hover:text-primary-2"
                    className="border-2 border-solid border-primary-2"
                    text="Checkout"
                    url={checkoutUrl}></Button>
                  <Button
                    full={true}
                    bgColor="bg-white"
                    bgHoverColor="hover:bg-primary-2"
                    textColor="text-primary-2"
                    textHoverColor="hover:text-white"
                    className="border-2 border-solid border-primary-2"
                    text="Continue Shopping"
                    onClick={closeSidebar}></Button>
                </div>
              </DrawerFooter>
            )}
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default index;
