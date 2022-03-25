import { Container } from '../Slice';
import React from 'react';
import Image from 'next/image';
interface IconsGridProps {
  slice: any;
}

const IconsGrid: React.FC<IconsGridProps> = ({ slice }) => {
  return (
    <div id={slice.slice_type}>
    <div className="bg-bg-gray w-full">
      <Container>
        {slice.items && (
          <div className="w-full flex justify-around items-center flex-wrap md:flex-nowrap">
            {slice.items.map((item, index) => (
              <img
                key={`value-prop-${index}`}
                src={item.value_prop_icon.url}
                height="100px"
                width="auto"
                className="mb-4 md:mb-0"
              />
            ))}
          </div>
        )}
      </Container>
    </div>
    </div>
  );
};

export default IconsGrid;
