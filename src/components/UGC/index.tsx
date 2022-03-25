import React from 'react';
import { Button, Subhead } from '../Shared';
import { Container } from '../Slice';
import UGCItem from './UGCItem';
import AnchorButton from 'react-anchor-link-smooth-scroll';

interface UGCProps {
  slice: any;
}

const UGC: React.FC<UGCProps> = ({ slice }) => {
  const header = slice.primary.header ? slice.primary.header[0].text : '';
  const copy = slice.primary.description ? slice.primary.description[0].text : '';
  return (
    <div id={slice.slice_type}> 
    <Container maxW="max-w-[1440px] md:mt-8 md:mb-12" verticalSpacing="space-y-4">
      {header && <Subhead className="text-accent-1">{header}</Subhead>}
      {copy && (
        <p className="section-header-body font-sans font-black text-4xl text-primary-2 text-center">
          {copy}
        </p>
      )}
      {slice.items && (
        <div className="grid grid-cols-2 md:grid-cols-3">
          {slice.items.map((item, index) => (
            <UGCItem key={`media-${index}`} media={item} isFirst={index === 0} />
          ))}
        </div>
      )}

      <Button
        url="#product"
        behavior="scroll"
        text="SHOP BUNDLE"
        className="font-black mt-4"></Button>
    </Container>
    </div>
  );
};

export default UGC;
