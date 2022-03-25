import Image from 'next/image';
import { RichText } from 'prismic-reactjs';
import React from 'react';
import { Button, Headline, Subhead } from '../Shared';
import { Container } from '../Slice';
import AnchorButton from 'react-anchor-link-smooth-scroll';

interface EducationalSectionProps {
  slice: any;
}

const EducationalSection: React.FC<EducationalSectionProps> = ({ slice }) => {
  const dImagePos = slice.primary.desktop_image_position;
  const mImagePos = slice.primary.mobile_image_position;
  if (dImagePos == 'Left') {
    return (
      <div id={slice.slice_type}>
      <Container maxW="max-w-[1440px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:mt-12">
          <img
            src={slice.primary.image.url}
            width={slice.primary.image.dimensions.width}
            height={slice.primary.image.dimensions.height}
            className="object-cover object-center"
          />
          <div className="self-center space-y-6 max-w-xl px-4 mx-auto flex flex-col items-center justify-center md:items-start">
            <Subhead className="text-sm text-accent-1">
              {slice.primary.sub_headline[0].text}
            </Subhead>
            <Headline center={false}>{slice.primary.headline[0].text}</Headline>
            <RichText
              render={slice.primary.copy}
              Component="div"
              className="education-body text-center text-lg font-medium font-futura md:text-left leading-loose tracking-wide"
            />
            <Button
              url="#product"
              behavior="scroll"
              text="SHOP BUNDLE"
              className="font-black"></Button>
          </div>
        </div>
      </Container>
      </div>
    );
  } else {
    return (
      <div id={slice.slice_type}>
      <Container maxW="max-w-[1440px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img
            src={slice.primary.mobile_image.url}
            width={slice.primary.mobile_image.dimensions.width}
            height={slice.primary.mobile_image.dimensions.height}
            className="object-center object-cover md:hidden mb-4 max-w-[568px] max-h-[517px]"
          />
          <div className="self-center space-y-6 max-w-xl px-4 mx-auto flex flex-col items-center justify-center md:items-start">
            <Subhead>{slice.primary.sub_headline[0].text}</Subhead>
            <Headline center={false}>{slice.primary.headline[0].text}</Headline>
            <RichText
              render={slice.primary.copy}
              Component="div"
              className="education-body text-center text-md font-medium font-sans md:text-left leading-normal tracking-wide"
            />

            <Button url="#product" behavior="scroll" text="SHOP BUNDLE"></Button>
          </div>
          <img
            src={slice.primary.image.url}
            width={slice.primary.image.dimensions.width}
            height={slice.primary.image.dimensions.height}
            className="object-center object-cover hidden md:block"
          />
        </div>
      </Container>
      </div>
    );
  }
};

export default EducationalSection;
