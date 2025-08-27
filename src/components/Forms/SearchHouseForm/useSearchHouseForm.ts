import * as Yup from 'yup';
import { useClearObject, useForm } from '@/hooks';
import { useRouter } from 'next/navigation';

const schema = Yup.object().shape({
  keywords: Yup.string(),
});

export type SearchHousePayload = Yup.InferType<typeof schema>;

export const useSearchHouseForm = () => {
  const { register, handleSubmit, errors, reset } = useForm<SearchHousePayload>(schema);
  const { keysUndefined } = useClearObject();
  const router = useRouter();

  const onSubmit = (data: SearchHousePayload) => {
    const query = new URLSearchParams(keysUndefined(data) as Record<string, string>).toString();
    reset();
    router.push(`/residence${query}`);
  };

  return { register, onSubmit: handleSubmit(onSubmit), errors };
};
