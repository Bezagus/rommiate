import * as yup from 'yup';
import { useClearObject, useForm } from '@/hooks';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

const schema = yup.object().shape({
  keywords: yup.string(),
});

export type SearchCommunityPayload = yup.InferType<typeof schema>;

export const useSearchCommunityForm = () => {
  const { reset, register, handleSubmit, errors } = useForm<SearchCommunityPayload>(schema);
  const router = useRouter();
  const { keysUndefined } = useClearObject();

  const onSubmit = useCallback(
    (data: SearchCommunityPayload) => {
      const query = new URLSearchParams(keysUndefined(data) as Record<string, string>).toString();
      reset();
      router.push(`/communities${query}`);
    },
    [keysUndefined, reset, router]
  );

  return {
    onSubmit: handleSubmit(onSubmit),
    register,
    errors,
  };
};
