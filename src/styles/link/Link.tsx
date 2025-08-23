import React from 'react';
import classNames from 'classnames';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

const Link = ({ children, className, ...props }: LinkProps) => {
  return (
    <a
      className={classNames(className, 'hover:scale-105 active:scale-90 hover:cursor-pointer')}
      {...props}
    >
      {children}
    </a>
  );
};
export default Link;
