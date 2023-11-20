import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import { ErrorMessage } from '@hookform/error-message';

import Input from './Input';
import Form from './Form';
import SelectAuthor from './SelectAuthor';

const QuoteForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm({ mode: `onChange`, criteriaMode: 'all' });

  const handleOnSubmit = useCallback(
    (data) => {
      onSubmit({ ...data, author: JSON.parse(data.author) });
      reset();
    },
    [onSubmit]
  );

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
          <SelectAuthor
            properties={register(`author`, {
              validate: (value) => value !== '' || 'Выберете автора',
            })}
            title="Выбрать автора"
          />
          <ErrorMessage
            errors={errors}
            name={'author'}
            render={({ messages }) =>
              messages &&
              Object.entries(messages).map(([type, message]) => (
                <p key={type} className={`error`}>
                  {message}
                </p>
              ))
            }
          />
        </div>
      </Form>
    </>
  );
};

export default QuoteForm;
