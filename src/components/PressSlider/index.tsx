import React from 'react';
import { Container } from '../Slice';
import ImageGallery from 'react-image-gallery';
import { Subhead } from '../Shared';

interface PressSliderProps {
  slice: any;
}

const PressSlider: React.FC<PressSliderProps> = ({ slice }) => {
  console.log('press slider slice', slice);
  const images = [
    {
      original:
        'https://images.prismic.io/ml-rightrice-1/2efe4eb2-08ee-480c-9a6a-e9b1edfe33be_review-1.jpg?auto=compress,format'
    },
    {
      original:
        'https://images.prismic.io/ml-rightrice-1/4b392d1d-4966-4fe0-97af-e2b1b06e3094_review-2.jpg?auto=compress,format'
    },
    {
      original:
        'https://images.prismic.io/ml-rightrice-1/7c1ca260-640c-436d-a3c3-b0c914fce30a_review-3.jpg?auto=compress,format'
    }
  ];
  return (
    <div id={slice.slice_type}>
    <Container maxW="max-w-[1440px]">
      <Subhead className="text-accent-1">OUR CUSTOMERS SAY IT BEST!</Subhead>
      <div className="w-full flex items-center justify-center md:hidden press-slider">
        <ImageGallery
          items={images}
          showNav={false}
          showThumbnails={false}
          showFullscreenButton={false}
          showPlayButton={false}
          showBullets={true}
          className="md:hidden"
        />
      </div>
      <div className="w-full hidden md:flex flex-row items-center justify-center mx-auto pb-12">
        {slice.items.map((hit, idx) => (
          <div key={`press-hit-${idx}`} className="px-1">
            <img
              src={hit.review_content.url}
              alt={hit.review_content.alt}
              className="mx-auto"
              style={{ maxHeight: 500, width: 'auto' }}
            />
          </div>
        ))}
      </div>
    </Container>
    </div>
  );
};

export default PressSlider;
