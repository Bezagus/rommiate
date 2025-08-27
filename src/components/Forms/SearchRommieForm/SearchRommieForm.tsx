'use client';
import { Button, Input, SearchIcon } from '@/styles';
import React from 'react';
import { useSearchRommieForm } from '@/components/Forms/SearchRommieForm/useSearchRommieForm';

const SearchRommieForm = () => {
  const { register, onSubmit, errors } = useSearchRommieForm();

  return (
    <form onSubmit={onSubmit} className="space-y-6 lg:space-y-4">
      <div className="w-full flex-col flex md:flex-row gap-6">
        <Input
          placeholder="Lugar de Origen (ej: Capital Federal)"
          {...register('from')}
          error={errors.from?.message}
        />
        <Input
          placeholder="Lugar Objetivo (ej: Cordoba)"
          {...register('to')}
          error={errors.to?.message}
        />
      </div>
      <div className="w-full flex flex-col md:flex-row gap-6">
        <Input
          placeholder="Palabra claves (ej: Basquet, Musica, etc)"
          {...register('keywords')}
          error={errors.keywords?.message}
        />
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
