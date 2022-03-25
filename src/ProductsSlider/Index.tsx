import React, { useEffect, useState } from 'react';
import { resolveProducts } from '../../lib/resolveProducts';
import { Container } from '../components/Slice';
import ProductCard from './ProductCard';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { RichText } from 'prismic-reactjs';

interface ProductsSliderProps {
  slice: any;
}
const ProductsSlider: React.FC<ProductsSliderProps> = ({ slice }) => {
  const productsList = slice.items.map((item) => RichText.asText(item.product_handle));
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const loadProducts = async () => {
      const loadedProducts = await resolveProducts(productsList);
      setProducts(loadedProducts);
    };
    loadProducts();
  }, []);
  return (
    <div id={slice.slice_type}> 
    <Container maxW="md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
      <div className="w-full flex flex-col justify-center items-center" id="products-grid">
        <h3 className="uppercase font-sans font-bold text-primary-3 tracking-wider text-center md:text-left">
          {slice.primary.collection_name[0].text}
        </h3>
      </div>
      <div className="w-full" style={{ maxWidth: 'screen' }}>
        <div className="w-full hidden md:block" style={{ maxWidth: 'screen' }}>
          <CarouselProvider
            naturalSlideHeight={1}
            naturalSlideWidth={1}
            visibleSlides={4}
            totalSlides={products.length}
            isIntrinsicHeight={true}
            className="w-full relative"
            infinite={true}
            dragEnabled={false}>
            <Slider className="w-full">
              {products.map((p, index) => (
                <Slide index={index} key={`product-slide-${p.id}`}>
                  <ProductCard product={p} />
                </Slide>
              ))}
            </Slider>
            <ButtonBack className="absolute left-0" style={{ top: '40%' }}>
              <img className="h-10 w-10" src="/btn-back.png" />
            </ButtonBack>
            <ButtonNext className="absolute right-0" style={{ top: '40%' }}>
              <img className="h-10 w-10" src="/btn-next.png" />
            </ButtonNext>
          </CarouselProvider>
        </div>
      </div>
      <div className="w-full grid grid-cols-2 md:hidden">
        {products.map((p, index) => (
          <ProductCard product={p} key={`product-grid-${p.id}-${index}`} />
        ))}
      </div>
    </Container>
    </div>
  );
};

export default ProductsSlider;
