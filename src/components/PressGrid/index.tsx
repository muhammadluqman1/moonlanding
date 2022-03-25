import Image from 'next/image';
import { RichText } from 'prismic-reactjs';
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Container } from '../Slice';

interface PressGridProps {
  slice: any;
}

const PressGrid: React.FC<PressGridProps> = ({ slice }) => {
  // console.log('slice: ', slice);
  return (
    <div id={slice.slice_type}>
    <div className="flex-grow w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 w-full">
        {slice.items.map((item, index) => (
          <div
            className={`flex flex-col items-center justify-center space-y-8 px-8 py-12 ${
              index % 2 ? 'bg-skeptic-400' : 'bg-skeptic-500'
            }`}
            key={`press-grid-${index}`}>
            <div className="flex space-x-2 text-green-800">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div>
              <p className="text-center text-2xl w-60">{item.review_copy[0].text}</p>
            </div>
            <div>
              <img src={item.press_logo.url} className="h-6"></img>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default PressGrid;
