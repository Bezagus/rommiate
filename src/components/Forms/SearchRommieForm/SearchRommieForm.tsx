import { Button, Input, SearchIcon } from '@/styles';
import React from 'react';

const SearchRommieForm = () => {
  return (
    <form className="space-y-6 lg:space-y-4">
      <div className="w-full flex-col flex md:flex-row gap-6">
        <Input placeholder="Lugar de Origen (ej: Capital Federal)" />
        <Input placeholder="Lugar Objetivo (ej: Cordoba)" />
      </div>
      <div className="w-full flex flex-col md:flex-row gap-6">
        <Input placeholder="Palabra claves (ej: Basquet, Musica, etc)" />
        <Button
          type="submit"
          rightIcon={{
            icon: SearchIcon,
          }}
        >
          Buscar
        </Button>
      </div>
    </form>
  );
};
export default SearchRommieForm;
