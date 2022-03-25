import { RichText } from 'prismic-reactjs';
import React from 'react';
import { Container } from '../Slice';

interface SectionHeaderProps {
  slice: any;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ slice }) => {
  const sub_headline = slice.primary.sub_headline ? slice.primary.sub_headline[0].text : '';
  const headline = slice.primary.headline ? slice.primary.headline[0].text : '';
  const copy = slice.primary.copy ? slice.primary.copy : [];
  return (
    <div id={slice.slice_type}> 
    <div id="stacks">
      <Container verticalSpacing="space-y-3">
        {sub_headline && (
          <h3 className="text-sm uppercase text-primary-1 tracking-widest font-black antialiased font-futura-pt-bold">
            {sub_headline}
          </h3>
        )}
        {headline && (
          <p className="font-futura font-medium text-5xl text-primary-2 max-w-lg text-center">
            {headline}
          </p>
        )}
        {copy && (
          <RichText
            render={copy}
            Component="div"
            className="section-header-body font-futura font-medium text-2xl text-primary-2 text-center"
          />
        )}
      </Container>
    </div>
    </div>
  );
};

export default SectionHeader;
