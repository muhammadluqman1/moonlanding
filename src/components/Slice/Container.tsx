import React from 'react';

interface ContainerProps {
  maxW?: string;
  verticalSpacing?: string;
}

const Container: React.FC<ContainerProps> = ({
  children,
  maxW = 'max-w-3xl',
  verticalSpacing = 'space-y-6'
}) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-6">
      <div
        className={`flex flex-col items-center justify-center mx-auto ${maxW} ${verticalSpacing}`}>
        {children}
      </div>
    </div>
  );
};

export default Container;
