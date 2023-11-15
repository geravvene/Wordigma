import { useForm } from 'react-hook-form';

import Input from './Input';
import Form from './Form';
import { useCallback } from 'react';

const UserForm = ({ onSubmit, btnColor, btnText, formTitle }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm({ mode: `onChange`, criteriaMode: 'all' });

  const handleOnSubmit = useCallback(
    (data) => {
      onSubmit(data);
      reset();
    },
    [onSubmit, reset]
  );

  return (
    <>
      <Form
        onSubmit={handleSubmit(handleOnSubmit)}
        button={{
          disabled: isSubmitting,
          color: btnColor,
          type: 'submit',
        }}
        text={btnText}
        title={formTitle}
      >
        <div className={`flexcol w-full col-span-6 gap-3`}>
          <Input
            name={`name`}
            register={register(`name`, {
              required: `Имя необходимо`,
              minLength: {
                value: 4,
                message: 'Минимум 4 символа',
              },
              maxLength: {
                value: 10,
                message: 'Максимум 10 символов',
              },
            })}
            errors={errors}
          />
        </div>
        <div className={`flexcol col-span-6 gap-3`}>
          <Input
            name={`password`}
            register={register(`password`, {
              required: `Пароль необходим`,
              minLength: {
                value: 6,
                message: 'Минимум 6 символов',
              },
              pattern: {
                value: /[\d]+/,
                message: 'Содержит хотя бы одно число',
              },
            })}
            errors={errors}
          />
        </div>
      </Form>
    </>
  );
};
export default UserForm;
