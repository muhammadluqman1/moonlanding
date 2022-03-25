import React from 'react';

import AnchorLink from 'react-anchor-link-smooth-scroll';
// interface indexProps {

// }

const FullWidthImg = ({ slice }) => {
  const {
    primary: { desktop_image, mobile_image }
  } = slice;
  return (
    <div id={slice.slice_type}>
    <AnchorLink href="#product">
      <div className="flex items-center justify-center max-w-[1440px] mx-auto">
        <img className="hidden md:block" src={desktop_image.url} alt="" />
        <img className="md:hidden" src={mobile_image.url} alt="" />
      </div>
    </AnchorLink>
    </div>
  );
};

export default FullWidthImg;
