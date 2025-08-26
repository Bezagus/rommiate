import { Button, Input, SearchIcon } from '@/styles';
import React from 'react';

const SearchRommieForm = () => {
  return (
    <>
      <div className="w-full flex-col flex md:flex-row gap-6">
        <Input placeholder="Lugar de Origen (ej: Capital Federal)" />
        <Input placeholder="Lugar Objetivo (ej: Cordoba)" />
      </div>
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
export default SearchRommieForm;
