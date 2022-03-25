import React from 'react';

interface SubheadProps {
  className?: String;
}

const Subhead: React.FC<SubheadProps> = ({ children, className }) => {
  return (
    <>
      <h3
        className={`text-lg text-center md:text-left uppercase tracking-wider leading-none font-black font-sans ${className}`}>
        {children}
      </h3>
    </>
  );
};

export default Subhead;
