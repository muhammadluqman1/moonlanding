import React from 'react';
import AnchorButton from 'react-anchor-link-smooth-scroll';

interface heroV1Props {
  slice: any;
  doc: any;
}

const HeroV1: React.FC<heroV1Props> = ({ slice, doc }) => {
  return (
    <div id={slice.slice_type}>
    <div className="w-full">
      <div className="w-full md:h-[575px] relative" id="hero">
        <img
          src={slice.primary.desktop_background_image.url}
          className="hidden md:block object-cover w-full h-full object-center absolute z-0"
        />
        <img
          src={slice.primary.mobile_background_image.url}
          className="md:hidden object-cover w-full h-full object-center absolute z-0"
        />
        <img src="/logo.png" className="hidden md:block w-32" alt="Enso Rings" />
        <div className="absolute w-screen mx-auto top-6 flex items-center justify-center">
          <img src={doc.data.brand_logo.url} alt="" className="w-36 h-auto z-10" />
        </div>
        <div className="max-w-7xl mx-auto px-4 pt-[50vh] md:pt-12 pb-4 md:pb-24 flex items-start md:items-center justify-between h-full">
          <div className="z-20 md:hidden mx-auto">
            <AnchorButton href="#product">
              <img
                src={slice.primary.mobile_content_image.url}
                className="w-full h-auto mx-auto"
                alt={slice.primary.mobile_content_image.alt}
              />
            </AnchorButton>
          </div>
          <div className="z-20 flex-shrink hidden md:block">
            <AnchorButton href="#product">
              <img
                src={slice.primary.desktop_content_image.url}
                className="w-full max-w-[520px] h-auto"
                alt={slice.primary.desktop_content_image.alt}
              />
            </AnchorButton>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default HeroV1;
