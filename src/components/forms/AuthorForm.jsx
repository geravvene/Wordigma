import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import Input from './Input';
import Form from './Form';

const AuthorForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm({ mode: `onChange`, criteriaMode: 'all' });

  const handleOnSubmit = useCallback((data) => {
    onSubmit({ ...data, img: data.img.item(0) });
    reset();
  }, [onSubmit]);

  return (
    <>
      <Form
        onSubmit={handleSubmit(handleOnSubmit)}
        button={{ disabled: isSubmitting, color: 'bg-blue', type: 'submit' }}
        text={'Создать'}
        title={'Создать Автора'}
      >
        <div className={`flexcol w-full col-span-6 gap-3`}>
          <Input
            name={`name`}
            register={register(`name`, {
              required: `Имя необходимо`,
              minLength: {
                value: 4,
                message: 'Минимум 2 символа',
              },
              maxLength: {
                value: 20,
                message: 'Максимум 20 символов',
              },
            })}
            errors={errors}
          />
        </div>
        <div className={`flexcol col-span-6 gap-3`}>
          <Input
            name={`url`}
            register={register(`url`, {
              required: `Имя необходимо`,
              pattern: {
                value: /^https?:\/\/?ru\.m\.wikipedia.org/,
                message: 'Сcылка на мобильную wiki',
              },
            })}
            errors={errors}
          />
        </div>
        <div className={`flexcol col-span-12 gap-3`}>
          <Input
            name={`img`}
            register={register(`img`, {
              validate: {
                isImg: (v) =>
                  v.item(0).type.includes('image') ||
                  'Должно быть изображением',
              },
              required: `Фото необходимо`,
            })}
            errors={errors}
            arg={{ type: 'file' }}
          />
        </div>
      </Form>
    </>
  );
};

export default AuthorForm;
