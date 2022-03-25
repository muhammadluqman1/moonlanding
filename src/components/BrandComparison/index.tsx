import Image from 'next/image';
import { RichText } from 'prismic-reactjs';
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Container } from '../Slice';

interface BrandComparisonProps {
  slice: any;
}

const BrandComparison: React.FC<BrandComparisonProps> = ({ slice }) => {
  // console.log('slice: ', slice);
  return (
    <div id={slice.slice_type} >
      <div className="flex-grow w-full"> 
      <div className="grid grid-cols-1 md:grid-cols-2 w-full">
        <div>
          <img
            src={slice.primary.image.url}
            width="600"
            height="600"
            className="object-cover object-center"
          />
        </div>
        <div className="self-center justify-self-center">
          <img src={slice.primary.right_image.url} width="500" height="500" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default BrandComparison;
