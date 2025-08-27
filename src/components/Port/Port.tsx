'use client';
import React from 'react';
import { Button, Section } from '@/styles';
import { usePort } from '@/components/Port/usePort';
import { SearchRommieForm, SearchCommunityForm, SearchHouseForm } from '@/components';
import { OptionButton } from '@/components/Port/types';

const Port = () => {
  const { optionsButtons, optionActive, setOptionActive } = usePort();

  return (
    <Section
      classNameContainer="h-[calc(100vh-70px)]"
      className="flex flex-col items-center justify-center"
      imgBackground={{ src: '/images/port.jpg', alt: 'Portada Rommiate' }}
    >
      <div className="w-full px-4 lg:px-20 xl:w-[70vw] xl:px-0 2xl:w-[50vw]">
        <div className="bg-white rounded-t-[20px] md:px-3 py-2 w-full lg:w-2/3 2xl:w-1/2 flex justify-between px-4 pt-5 md:py-2">
          {optionsButtons.map(({ label, icon: Icon, key }) => (
            <Button
              key={key}
              leftIcon={optionActive === key ? { icon: Icon } : undefined}
              size="small"
              padding={false}
              className="py-3 w-full"
              variant={optionActive === key ? 'primary-stoke' : 'secondary-text'}
              onClick={() => setOptionActive(key)}
            >
              {label}
            </Button>
          ))}
        </div>
        <div className="bg-white rounded-b-[20px] lg:rounded-tr-[20px] flex px-3 py-5 flex-col gap-5">
          {optionActive === OptionButton.ROMMIE && <SearchRommieForm />}
          {optionActive === OptionButton.COMMUNITY && <SearchCommunityForm />}
          {optionActive === OptionButton.HOUSE && <SearchHouseForm />}
        </div>
      </div>
    </Section>
  );
};

export default Port;
