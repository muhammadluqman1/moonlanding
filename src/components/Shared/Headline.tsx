import React from 'react';

interface HeadlineProps {
  center?: boolean;
}

const Headline: React.FC<HeadlineProps> = ({ children, center = true }) => {
  return (
    <>
      <h2
        className={`text-4xl font-sans font-black text-center md:text-left  ${
          center && 'text-center'
        }`}>
        {children}
      </h2>
    </>
  );
};

export default Headline;
