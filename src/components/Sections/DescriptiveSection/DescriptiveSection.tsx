import { Button, H3, H6 } from '@/styles';
import React from 'react';
import Image from 'next/image';

interface Props {
  title: string;
  description: string;
  button: {
    label: string;
    href?: string;
  };
  image: {
    src: string;
    alt: string;
  };
}

const DescriptiveSection = ({ title, description, button, image }: Props) => {
  return (
    <div className="bg-primary-50">
      <div className="container mx-auto flex justify-center items-center flex-col lg:flex-row py-12 px-4 xl:px-0">
        <div className="h-[480px] flex-1 flex flex-col gap-6 justify-center">
          <H3 className="text-primary">{title}</H3>
          <H6 className="max-w-[686px]">{description}</H6>
          <Button className="w-[144px]" href={button.href}>
            {button.label}
          </Button>
        </div>
        <div className="flex mt-6">
          <Image src={image.src} alt={image.alt} className="w-3/4 lg:w-auto mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default DescriptiveSection;
