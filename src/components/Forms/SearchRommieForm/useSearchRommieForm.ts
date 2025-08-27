'use client';
import { useForm, useClearObject } from '@/hooks';
import * as yup from 'yup';
import { useCallback } from 'react';
import { useRouter } from 'next/navigation';

const schema = yup.object().shape({
  from: yup.string(),
  to: yup.string(),
  keywords: yup.string(),
});

export type SearchRommiePayload = yup.InferType<typeof schema>;

export const useSearchRommieForm = () => {
  const { register, handleSubmit, errors, reset } = useForm<SearchRommiePayload>(schema);
  const router = useRouter();
  const { keysUndefined } = useClearObject();

  const onSubmit = useCallback(
    (data: SearchRommiePayload) => {
      const query = new URLSearchParams(keysUndefined(data) as Record<string, string>).toString();
      reset();
      router.push(`/rommies${query}`);
    },
    [keysUndefined, reset, router]
  );

  return { register, onSubmit: handleSubmit(onSubmit), errors };
};
