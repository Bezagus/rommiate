import React, { useEffect, useState } from 'react';

export interface SectionSliderProps<T> {
  title: string;
  leftButton?: {
    label: string;
    href: string;
  };
  CardComponent: React.ComponentType<T>;
  data: T[];
}

export const useSectionSlider = () => {
  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  let perView: number;
  let spaceBetween: number | undefined = undefined;
  if (width < 640) {
    perView = 1;
    spaceBetween = 30;
  } else if (width >= 640 && width < 770) {
    perView = 2;
    spaceBetween = 30;
  } else if (width >= 768 && width < 1444) {
    perView = 3;
    spaceBetween = 40;
  } else {
    perView = 4;
    spaceBetween = 40;
  }

  return {
    perView,
    spaceBetween,
  };
};
