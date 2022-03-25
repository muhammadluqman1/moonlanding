/* eslint-disable react/prop-types */
import React from 'react';
import BrandComparison from './BrandComparison';
import BrandStatement from './BrandStatement';
import EducationalSection from './EducationalSection';
import PressGrid from './PressGrid';
import Product from './Product';
import IconsGrid from './IconsGrid';
import ProductsSlider from '../ProductsSlider/Index';
import SectionHeader from './SectionHeader';
import BundleTotal from './BundleTotal';
import UGC from './UGC';
import ReviewsSlider from './ReviewsSlider';
import FullWidthImg from './FullWidthImg';
import PressSlider from './PressSlider';
import HeroV1 from './HeroVariation1';
import ProductsGrid from './ProductGrid';

const SliceZone = ({ sliceZone, cartAttributes, doc }) => {
  return (
    <>
      {sliceZone.map((slice, index) => {
        // console.log(slice);
        switch (slice.slice_type) {
          case 'hero':
            return <HeroV1 slice={slice} doc={doc} key={index} />;
          case 'icons_grid':
            return <IconsGrid slice={slice} key={index} />;
          case 'brand_statement':
            return <BrandStatement slice={slice} key={index} />;
          case 'section_header':
            return <SectionHeader slice={slice} key={index} />;
          case 'educational_section':
            return <EducationalSection slice={slice} key={index} />;
          case 'product':
            return <Product cartAttributes={cartAttributes} slice={slice} key={index}></Product>;
          case 'product_grid':
            return <ProductsGrid slice={slice} key={index} />;
          case 'press___review_grid':
            return <PressGrid key={index} slice={slice}></PressGrid>;
          case 'press___review_slider':
            return <ReviewsSlider slice={slice} key={index} />;
          case 'press_slider':
            return (
              <div key={index}>
                <PressSlider slice={slice} />
              </div>
            );
          case 'us_vs_them_section':
            return <BrandComparison slice={slice} key={index}></BrandComparison>;
          case 'ugc_grid':
            return <UGC slice={slice} key={index} />;
          case 'suggested_products':
            return <div key={index}>This is a suggested products section</div>;
          case 'product_slider':
            return <ProductsSlider slice={slice} key={index} />;
          case 'bundle_total':
            return <BundleTotal key={index} />;
          case 'full_width_image_section':
            return <FullWidthImg key={index} slice={slice} />;
        }
      })}
    </>
  );
};

export default SliceZone;
