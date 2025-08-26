import React from 'react';
import classNames from 'classnames';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  variant?: 'primary';
  externalLink?: boolean;
}

const styleVariant = {
  primary: 'text-primary ',
};

const Link = ({ children, className, variant, externalLink, ...props }: LinkProps) => {
  return (
    <a
      className={classNames(
        className,
        'hover:scale-105 active:scale-90 hover:cursor-pointer text-center flex gap-2 items-center justify-center transition-all duration-200 ease-in-out',
        variant && styleVariant[variant]
      )}
      target={externalLink ? '_blank' : '_self'}
      {...props}
    >
      {children}
    </a>
  );
};
export default Link;
