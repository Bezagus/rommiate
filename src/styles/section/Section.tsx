import React from 'react';
import classNames from 'classnames';

interface SectionProps {
  classNameContainer?: string;
  className?: string;
  children: React.ReactNode;
  imgBackground?: {
    src: string;
    alt: string;
  };
}

const Section = ({ children, classNameContainer, className, imgBackground }: SectionProps) => {
  return (
    <section className={classNames('relative', classNameContainer)}>
      {imgBackground && (
        <>
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70" />
          <img
            src={imgBackground.src}
            alt={imgBackground.alt}
            className="object-cover w-full h-full"
          />
        </>
      )}

      <div
        className={classNames(
          ' px-2 lg:px-2 xl:px-0 w-svw',
          imgBackground ? 'absolute bottom-0 left-0 w-full h-full' : 'container mx-auto',
          className
        )}
      >
        {children}
      </div>
    </section>
  );
};

export default Section;
