import { DataService } from '../services/data.service';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';

import { FuncService } from '../services/func.service';

async function postData(data, path, check, func) {
  if (
    await FuncService.checkExistence(
      `filter/${path}/${JSON.stringify({ [check]: data[check] })}`
    )
  )
    throw new Error(`${check} занято`);
  return (await func) ? func(path, data) : DataService.postData(path, data);
}

export const useMutateForm = (path, check, options, func) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm({ mode: `onChange`, criteriaMode: 'all' });
  
  const { mutate } = useMutation(
    [`${path} mutate`],
    async (data) => postData(data, path, check, func),
    options
  );

  return {
    errors,
    register,
    mutate,
    isSubmitting,
    handleSubmit,
    reset,
  };
};
