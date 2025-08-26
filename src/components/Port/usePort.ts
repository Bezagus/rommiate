import { UsersIcon, UserIcon, RoomIcon } from '@/styles';
import React from 'react';
import { OptionButton } from '@/components/Port/types';

const optionsButtons = [
  { label: 'Rommie', icon: UserIcon, key: OptionButton.ROMMIE },
  { label: 'Cominidades', icon: UsersIcon, key: OptionButton.COMMUNITY },
  { label: 'Casa/Dpto', icon: RoomIcon, key: OptionButton.HOUSE },
];

export const usePort = () => {
  const [optionActive, setOptionActive] = React.useState<OptionButton>(OptionButton.ROMMIE);

  return {
    optionActive,
    setOptionActive,
    optionsButtons,
  };
};
