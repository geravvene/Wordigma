import { useCallback } from 'react';
import { useQuery } from 'react-query';

import { DataService } from '../../services/data.service';
import Input from './Input';
import Form from './Form';
import { useMutateForm } from '../../hooks/useMutateForm';

const CreateQuote = ({ setText }) => {
  const { data, isLoading, isFetching } = useQuery([`authors`], () =>
    DataService.getData(`authors`)
  );
  const { errors, register, mutate, isSubmitting, handleSubmit, reset } =
    useMutateForm('quotes', 'text', {
      onSuccess: () => {
        setText('Цитата добавлена');
        reset();
      },
      onError: (error) => setText(error.message),
    });
  const changeData = useCallback((data) => {
    mutate({ ...data, author: JSON.parse(data.author) });
  }, []);

  if (isLoading || isFetching) return <p>Loading...</p>;
  return (
    <>
      <Form
        arg={{
          onSubmit: handleSubmit(changeData),
        }}
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
export default CreateQuote;
