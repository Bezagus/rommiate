import { Button, Input, SearchIcon } from '@/styles';
import React from 'react';
import { useSearchCommunityForm } from '@/components/Forms/SearchCommunityForm/useSearchCommunityForm';

const SearchCommunityForm = () => {
  const { register, errors, onSubmit } = useSearchCommunityForm();

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
export default SearchCommunityForm;
