import React from 'react';
import classNames from 'classnames';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  variant?: 'primary';
  externalLink?: boolean;
  hover?: boolean;
}

const styleVariant = {
  primary: 'text-primary ',
};

const Link = ({
  children,
  className,
  variant,
  externalLink,
  hover = true,
  ...props
}: LinkProps) => {
  return (
    <a
      className={classNames(
        className,
        ' text-center flex gap-2 items-center justify-center transition-all duration-200 ease-in-out',
        hover && 'hover:scale-105 active:scale-90 hover:cursor-pointer',
        variant && styleVariant[variant]
      )}
      target={externalLink ? '_blank' : '_self'}
      rel={externalLink ? 'noopener noreferrer' : undefined}
      {...props}
    >
      {children}
    </a>
  );
};
export default Link;
