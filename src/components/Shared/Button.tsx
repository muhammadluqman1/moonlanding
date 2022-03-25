import { Spinner } from '@chakra-ui/react';
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

interface ButtonProps {
  bgColor?: string;
  bgHoverColor?: string;
  textColor?: string;
  textHoverColor?: string;
  full?: boolean;
  url?: string;
  text: string;
  onClick?: any;
  isLoading?: boolean;
  disabled?: boolean;
  className?: string;
  textSize?: string;
  behavior?: 'link' | 'scroll';
}

const Button: React.FC<ButtonProps> = ({
  bgColor = 'bg-black',
  bgHoverColor = 'hover:bg-black hover:bg-opacity-90',
  textColor = 'text-white',
  textHoverColor = 'hover:text-white',
  url,
  onClick,
  full = false,
  text,
  isLoading = false,
  disabled = false,
  textSize = 'text-base',
  className = '',
  behavior = 'link'
}) => {
  if (behavior == 'link') {
    return (
      <div className={`cursor-pointer ${full && 'w-full'}`}>
        {url ? (
          <a
            href={url}
            className={`px-12 py-4 font-futura  tracking-wide ${textSize} ${bgColor} ${textColor} ${bgHoverColor} ${className} ${textHoverColor} transition-all duration-250 inline-block ${
              full && 'w-full text-center'
            }`}>
            {text}
          </a>
        ) : (
          <span
            className={`px-12 py-4 font-futura  tracking-wide ${textSize} ${bgColor} ${textColor} ${bgHoverColor} ${textHoverColor} ${className} transition-all duration-250 inline-block ${
              full && 'w-full text-center'
            }`}
            onClick={disabled ? null : onClick}>
            {isLoading ? <Spinner size="sm" /> : <>{text}</>}
          </span>
        )}
      </div>
    );
  } else if (behavior == 'scroll') {
    return (
      <div className={`cursor-pointer ${full && 'w-full'}`}>
        {url ? (
          <AnchorLink
            href={url}
            className={`px-12 py-4 font-futura  tracking-wide ${textSize} ${bgColor} ${textColor} ${bgHoverColor} ${className} ${textHoverColor} transition-all duration-250 inline-block ${
              full && 'w-full text-center'
            }`}>
            {text}
          </AnchorLink>
        ) : (
          <span
            className={`px-12 py-4 font-futura  tracking-wide ${textSize} ${bgColor} ${textColor} ${bgHoverColor} ${textHoverColor} ${className} transition-all duration-250 inline-block ${
              full && 'w-full text-center'
            }`}
            onClick={disabled ? null : onClick}>
            {isLoading ? <Spinner size="sm" /> : <>{text}</>}
          </span>
        )}
      </div>
    );
  }
};

export default Button;
