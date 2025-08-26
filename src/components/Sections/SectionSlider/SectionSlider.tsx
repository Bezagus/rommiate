import React from 'react';
import { ChevronIcon, H3, Link } from '@/styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import { useSectionSlider } from '@/components/Sections/SectionSlider/useSectionSlider';

interface SectionSliderProps<T> {
  title: string;
  leftButton?: {
    label: string;
    href: string;
  };
  CardComponent: React.ComponentType<T>;
  data: T[];
}

const SectionSlider = <T,>({ title, leftButton, CardComponent, data }: SectionSliderProps<T>) => {
  const presenter = useSectionSlider();

  return (
    <div className="container mx-auto my-10 w-svw px-2 md:px-4 lg:px-0">
      <div className="flex flex-row justify-between w-full">
        <H3 weight="font-bold" font="font-nunito">
          {title}
        </H3>
        {leftButton && (
          <Link variant="primary">
            {leftButton.label}
            <ChevronIcon size={12} />
          </Link>
        )}
      </div>
      <div className="mt-10 flex gap-12">
        <Swiper
          slidesPerView={presenter.perView}
          spaceBetween={presenter.spaceBetween}
          freeMode={true}
          modules={[FreeMode]}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              {/* @ts-expect-error: CardComponent props type does not match item type */}
              <CardComponent {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SectionSlider;
