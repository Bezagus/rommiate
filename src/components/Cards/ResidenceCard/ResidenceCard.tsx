import {
  BathroomIcon,
  Button,
  H6,
  LocationIcon,
  P,
  RoomIcon,
  UsersIcon,
  WorldIcon,
} from '@/styles';
import React from 'react';

export interface ResidenceCardProps {
  title: string;
  location: string;
  people: number;
  bathrooms: number;
  rooms?: number;
  description: string;
}

const ResidenceCard = (props: ResidenceCardProps) => {
  return (
    <div className="w-full border-2 border-secondary-50 rounded-[20px] overflow-hidden">
      <img
        src="https://www.zonaprop.com.ar/noticias/wp-content/uploads/2022/05/1802502200.jpg"
        className="h-[208px] w-full rounded-[20px]"
      />
      <div className="flex flex-col gap-3.5 px-3 py-5">
        <H6 weight="font-bold" font="font-gold">
          {props.title}
        </H6>
        <div className="flex gap-1.5 flex-col">
          <div className="flex items-center gap-1">
            <LocationIcon size={12} />
            <P size="small">{props.location}</P>
          </div>
          <div className="flex gap-10">
            <div className="flex items-center gap-1">
              <UsersIcon size={12} />
              <P size="small">{props.people}</P>
            </div>
            <div className="flex items-center gap-1">
              <BathroomIcon size={12} />
              <P size="small">{props.bathrooms}</P>
            </div>
            {props.rooms && (
              <div className="flex items-center gap-1">
                <RoomIcon size={16} />
                <P size="small">{props.rooms}</P>
              </div>
            )}
          </div>
        </div>
        <P>{props.description}</P>
        <Button variant="primary-stoke" size="small" className="text-center justify-center">
          Ver Detalles
        </Button>
      </div>
    </div>
  );
};

export default ResidenceCard;
