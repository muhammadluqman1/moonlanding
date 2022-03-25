import React, { useEffect, useState } from 'react';
import { resolveProducts } from '../../../lib/resolveProducts';
import { Container } from '../../components/Slice';
import ProductGridCard from './ProductGridCard';

interface ProductsGridProps {
  slice: any;
}

// const productsList = ['braided-stackable-silicone-ring-pink-sand'];
const ProductsGrid: React.FC<ProductsGridProps> = ({ slice }) => {
  const productsList = slice.items.map((item) => item.product_handle[0].text);
  const desktopGridSize = slice.primary.desktop_grid_size || 4;
  const imagesList = slice.items.map(item => item.product_image)
  const showButtons = slice.items.map(item => item.show_button)
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const loadProducts = async () => {
      const loadedProducts = await resolveProducts(productsList);
      setProducts(loadedProducts);
    };
    loadProducts();
  }, []);
  const settings = {
    dots: false,
    arrows: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  if (desktopGridSize == 4) {
    return (
      <div id={slice.slice_type}>
      <Container maxW="md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
        <div className="w-full flex justify-start">
          <h3 className="text-4xl text-center md:text-left max-w-xs font-futura font-medium false">
            {slice.primary.collection_name[0].text}
          </h3>
        </div>
        <div className="w-full" style={{ maxWidth: 'screen' }}>
          <div className="w-full" style={{ maxWidth: 'screen' }}>
            <div className={`grid grid-cols-2 md:grid-cols-4`}>
              {products.map((p, index) => (
                <ProductGridCard
                  key={`product-grid-${p.id}`}
                  product={p}
                  image={imagesList[index]}
                  showButton={showButtons[index]}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
      </div>
    );
  } else {
    return (
      <div id={slice.slice_type}>
      <Container maxW="md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
        <div className="w-full flex justify-start">
          <h3 className="text-4xl text-center md:text-left max-w-xs font-futura font-medium false">
            {slice.primary.collection_name[0].text}
          </h3>
        </div>
        <div className="w-full" style={{ maxWidth: 'screen' }}>
          <div className="w-full" style={{ maxWidth: 'screen' }}>
            <div className={`grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6`}>
              {products.map((p, index) => (
                <ProductGridCard
                  key={`product-grid-${p.id}`}
                  product={p}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
      </div>
    );
  }
};

export default ProductsGrid;