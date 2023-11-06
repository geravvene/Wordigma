import { FuncService } from '../../services/func.service';
import Input from './Input';
import Form from './Form';
import { useMutateForm } from '../../hooks/useMutateForm';

async function checkAuthorization(acc, setUser, setText) {
  FuncService.checkExistence(
    `filter/users/${JSON.stringify({ name: acc.name })}`
  ).then((data) => {
    data
      ? data[0].password == acc.password
        ? setUser(data[0])
        : setText(`Неверный пароль`)
      : setText(`Пользователь не найден`);
  });
}

const Entry = ({ setText, setUser }) => {
  const { errors, register, mutate, isSubmitting, handleSubmit, reset } =
    useMutateForm(
      'users',
      'name',
      setUser
        ? { onError: (error) => setText(error.message) }
        : {
            onSuccess: () => {
              setText('Пользователь успешно зарегистрирован');
              reset();
            },
            onError: (error) => setText(error.message),
          }
    );
  return (
    <>
      <Form
        arg={{
          onSubmit: handleSubmit(
            setUser
              ? (data) => {
                  checkAuthorization(data, setUser, setText);
                }
              : (data) => {
                  mutate({
                    ...data,
                    favorite: [],
                    img: `https://conceptwindows.com.au/wp-content/uploads/no-profile-pic-icon-27.png`,
                  });
                }
          ),
        }}
        button={{
          disabled: isSubmitting,
          color: setUser ? `bg-green` : `bg-blue`,
          type: 'submit',
        }}
        text={setUser ? `Войти` : `Зарегистрироваться`}
        title={setUser ? `Вход` : `Регистрация`}
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
export default Entry;
