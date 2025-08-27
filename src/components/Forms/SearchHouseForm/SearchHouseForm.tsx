import { Button, Input, SearchIcon } from '@/styles';
import React from 'react';
import { useSearchHouseForm } from '@/components/Forms/SearchHouseForm/useSearchHouseForm';

const SearchHouseForm = () => {
  const { register, errors, onSubmit } = useSearchHouseForm();

  return (
    <form onSubmit={onSubmit}>
      <div className="w-full flex flex-col md:flex-row gap-6">
        <Input
          placeholder="Palabra claves (ej: Basquet, Musica, etc)"
          error={errors.keywords?.message}
          {...register('keywords')}
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
export default SearchHouseForm;
