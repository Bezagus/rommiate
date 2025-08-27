import { yupResolver } from '@hookform/resolvers/yup';
import { useForm as useFormHook, FieldValues, UseFormReturn } from 'react-hook-form';
import * as yup from 'yup';

export const useForm = <T extends FieldValues>(schema: yup.ObjectSchema<any>) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  }: UseFormReturn<T> = useFormHook<T>({
    resolver: yupResolver(schema),
  });

  return { register, handleSubmit, errors, reset };
};
