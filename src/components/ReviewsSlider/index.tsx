import React from 'react';
import { Container } from '../Slice';
import Slider from 'react-slick';
import { MdStar } from 'react-icons/md';
import { Subhead } from '../Shared';

interface ReviewsSliderProps {
  slice: any;
}

const ReviewsSlider: React.FC<ReviewsSliderProps> = ({ slice }) => {
  // console.log(slice.items);
  const header = slice.primary.header ? slice.primary.header[0].text : '';
  const copy = slice.primary.description ? slice.primary.description[0].text : '';
  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    arrows: false,
    slidesToShow: 1,
    slideToSCroll: 1,
    speed: 500
  };
  return (
    <div id={slice.slice_type}>
    <div className="w-full bg-white">
      <Container maxW="max-w-7xl">
        {header && <Subhead>{header}</Subhead>}
        {copy && (
          <p className="section-header-body font-futura font-medium text-2xl text-primary-2 text-center">
            {copy}
          </p>
        )}
        {slice.items && (
          <div className="w-screen max-w-xl md:max-w-2xl lg:max-w-4xl px-6 py-12 bg-white bg-opacity-90">
            <Slider {...settings}>
              {slice.items.map((item, index) => (
                <div key={`ugc-slider-${index}`}>
                  <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-10 h-full">
                    <div className=" h-44 w-44">
                      <img
                        className="rounded-full"
                        src={item.review_image.url}
                        alt={item.review_image.alt || ''}
                      />
                    </div>
                    <div className="flex flex-col space-y-6 max-w-lg items-center md:items-start">
                      <div className="flex space-x-2">
                        <MdStar className="text-gold text-xl md:text-2xl" />
                        <MdStar className="text-gold text-xl md:text-2xl" />
                        <MdStar className="text-gold text-xl md:text-2xl" />
                        <MdStar className="text-gold text-xl md:text-2xl" />
                        <MdStar className="text-gold text-xl md:text-2xl" />
                      </div>
                      <p className="font-extrabold text-mosque font-sans tracking-wide text-2xl md:text-4xl text-center md:text-left">
                        {item.review[0].text}
                      </p>
                      <p className="font-extrabold text-mosque font-sans uppercase text-lg text-center md:text-left">
                        {item.reviewer_name[0].text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        )}
      </Container>
      </div>
    </div>
  );
};

export default ReviewsSlider;
