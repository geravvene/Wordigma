import { useCallback } from 'react';
import { useQuery } from 'react-query';
import { useForm } from 'react-hook-form';

import { DataService } from '../../services/data.service';
import Input from './Input';
import Form from './Form';

const QuoteForm = ({ onSubmit }) => {
  const { data, isLoading, isFetching } = useQuery([`authors`], () =>
    DataService.getData(`authors`)
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm({ mode: `onChange`, criteriaMode: 'all' });

  const handleOnSubmit = useCallback((data) => {
    onSubmit({ ...data, author: JSON.parse(data.author) });
    reset();
  }, [onSubmit]);

  if (isLoading || isFetching) return <p>Loading...</p>;
  return (
    <>
      <Form
        onSubmit={handleSubmit(handleOnSubmit)}
        button={{ disabled: isSubmitting, color: 'bg-blue', type: 'submit' }}
        text={'Создать'}
        title={'Создать Цитату'}
      >
        <div className={`flexcol w-full col-span-6 gap-3`}>
          <Input
            name={`text`}
            register={register(`text`, {
              required: `Текст необходим`,
              minLength: {
                value: 4,
                message: 'Минимум 4 символа',
              },
              maxLength: {
                value: 500,
                message: 'Максимум 500 символов',
              },
            })}
            errors={errors}
          />
        </div>
        <div className={`flexcol col-span-6 gap-3`}>
          <select
            className="input"
            {...register(`author`, {
              required: `Автор необходим`,
            })}
          >
            {data.map((author) => (
              <option key={author._id} value={JSON.stringify(author)}>
                {author.name}
              </option>
            ))}
          </select>
        </div>
      </Form>
    </>
  );
};

export default QuoteForm;
