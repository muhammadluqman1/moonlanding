import React, { useState } from 'react';
import { Container } from '../Slice';
import ImageGallery from 'react-image-gallery';
import { Button, Headline, Subhead } from '../Shared';
import ReviewStars from './reviewStars';
import { RichText } from 'prismic-reactjs';
import Collapsible from 'react-collapsible';
import { encode, decode } from 'shopify-gid';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure
} from '@chakra-ui/react';

interface ProductProps {
  slice: any;
  cartAttributes: string;
}

const renderLeftnav = (onClick, disabled) => {
  return (
    <button
      className="image-gallery-custom-left-nav"
      onClick={onClick}
      disabled={disabled}></button>
  );
};
const renderRightNav = (onClick, disabled) => {
  return (
    <button
      className="image-gallery-custom-right-nav"
      onClick={onClick}
      disabled={disabled}></button>
  );
};

const Product: React.FC<ProductProps> = ({ slice, cartAttributes }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // console.log('slice: ', slice);
  const images = slice.items.map((item) => {
    return {
      original: item.product_image.url
    };
  });

  console.log('slice', slice);
  const [readMore, setReadMore] = useState(false);
  const [otSelected, setOtSelected] = useState(true);
  const truncate = (input) => (input.length > 5 ? `${input.substring(0, 120)}...` : input);
  const textPreivew = truncate(RichText.asText(slice.primary.product_description));
  const handle = slice.primary.shopify_product_handle[0].text;
  const ctaSubtext = RichText.asText(slice.primary.cta_subtext)
  return (
    <div id={slice.slice_type}>
    <Container maxW="max-w-[1440px]">
      <div className="w-full flex flex-col md:flex-row items-stretch justify-center" id="product">
        <div className="w-full md:w-3/5 flex-grow">
          <ImageGallery
            items={images}
            showNave={false}
            showThumbnails={false}
            showFullscreenButton={false}
            showPlayButton={false}
            showBullets={true}
            renderRightNav={renderRightNav}
            renderLeftNav={renderLeftnav}
          />
        </div>
        <div className="w-full md:w-2/5 md:max-w-md px-8 py-4 bg-accent-1 flex flex-col justify-center items-center md:items-start space-y-6">
          <Subhead>{RichText.asText(slice.primary.product_subtitle)}</Subhead>
          <div className="flex flex-col items-center md:items-start space-y-3">
            <Headline center={false}>{RichText.asText(slice.primary.product_title)}</Headline>
            <ReviewStars
              average={slice.primary.average_review}
              numberOfReviews={slice.primary.number_of_reviews}
            />
          </div>
          <div>{RichText.render(slice.primary.product_description)}</div>
          {slice.primary.nutritional_chart.url && (
            <>
              <span className="block font-sans cursor-pointer underline" onClick={onOpen}>
                View Nutritional Chart
              </span>
              <Modal isOpen={isOpen} onClose={onClose} size="xl">
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader></ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <img src={slice.primary.nutritional_chart.url} />
                  </ModalBody>
                </ModalContent>
              </Modal>
            </>
          )}

          {/* <span className="block font-sans text-sm">Equals $11.48/bottle of wine (by volume)</span> */}
          <div className="w-full">
            <Button
              text={RichText.asText(slice.primary.sale_cta)}
              url={`https://${process.env.NEXT_PUBLIC_SHOPIFY_API_URL}/cart/${RichText.asText(slice.primary.variant_id)}:1?access_token=${process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN}`}
              className="w-full rounded-full text-center font-black"></Button>
          </div>
          {ctaSubtext ? <p className="font-sans text-center w-full">{ctaSubtext}</p> : null}
        </div>
      </div>
    </Container>
    </div>
  );
};

export default Product;
