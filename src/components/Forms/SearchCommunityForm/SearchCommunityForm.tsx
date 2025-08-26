import { Button, Input, SearchIcon } from '@/styles';
import React from 'react';

const SearchCommunityForm = () => {
  return (
    <>
      <div className="w-full flex flex-col md:flex-row gap-6">
        <Input placeholder="Palabra claves (ej: Basquet, Musica, etc)" />
        <Button
          rightIcon={{
            icon: SearchIcon,
          }}
        >
          Buscar
        </Button>
      </div>
    </>
  );
};
export default SearchCommunityForm;
