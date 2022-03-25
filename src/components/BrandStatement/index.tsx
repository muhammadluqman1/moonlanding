import React from 'react';
import { Button } from '../Shared';
import { Container } from '../Slice';
import { RichText } from 'prismic-reactjs';

interface indexProps {
  slice: any;
}

const BrandStatement: React.FC<indexProps> = ({ slice }) => {
  const sub_headline = slice.primary.sub_headline ? slice.primary.sub_headline[0].text : '';
  const copy = slice.primary.copy ? slice.primary.copy[0].text : '';
  const bodyCopy = slice.primary.body_copy ? slice.primary.body_copy : [];
  // console.log(bodyCopy);
  const cta_text = slice.primary.cta_text ? slice.primary.cta_text[0].text : '';
  return (
    <div id={slice.slice_type}>
    <Container>
      {sub_headline && (
        <h3 className="text-sm uppercase text-primary-1 tracking-widest font-black antialiased font-futura-pt-bold">
          {sub_headline}
        </h3>
      )}
      {copy && (
        <p className="font-futura font-medium text-5xl text-primary-2 max-w-lg text-center">
          {copy}
        </p>
      )}
      {bodyCopy && (
        <RichText
          render={bodyCopy}
          Component="div"
          className="font-futura font-medium text-2xl text-primary-2 text-center"
        />
      )}
      {cta_text && <Button behavior="scroll" url="#stacks" text={cta_text}></Button>}
      {slice.items && (
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-12">
          {slice.items.map((item, index) => (
            <div key={`value-prop-${index}`}>
              <img src={item.value_prop_icon.url} height="50px" width="50px" />
            </div>
          ))}
        </div>
      )}
    </Container>
    </div>
  );
};

export default BrandStatement;
