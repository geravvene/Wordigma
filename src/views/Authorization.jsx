import { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { checkExistence } from '@utils/funcs';
import useMutate from '@hooks/useMutate';
import FormPage from '@forms/FormPage';
import useActions from '@hooks/useActions';
import UserForm from '@forms/UserForm';

const Authorization = () => {
  const user_id = useSelector((state) => state.userReducer?._id);

  const { change } = useActions();

  const [text, setText] = useState(
    'Без авторизации вы не сможете добавлять цитаты в избранное'
  );

  const checkAuthorization = useCallback(
    (acc) => {
      FuncService.checkExistence(
        `filter/users/${JSON.stringify({ name: acc.name })}`
      ).then((data) => {
        data
          ? data[0].password == acc.password
            ? change(data[0])
            : setText(`Неверный пароль`)
          : setText(`Пользователь не найден`);
      });
    },
    [setText, change]
  );

  const mutate = useMutate('users', 'name', {
    onSuccess: () => {
      setText('Пользователь успешно зарегистрирован');
    },
    onError: (error) => setText(error.message),
  });

  const handleRegistration = useCallback(
    (data) => {
      mutate({
        ...data,
        favorite: [],
        img: `https://conceptwindows.com.au/wp-content/uploads/no-profile-pic-icon-27.png`,
      });
    },
    [change]
  );

  return user_id ? (
    <Navigate to="/rec" />
  ) : (
    <>
      <FormPage text={text}>
        <UserForm
          onChange={checkAuthorization}
          btnColor="green"
          btnText="Войти"
          formTitle="Вход"
        />
        <UserForm
          onChange={handleRegistration}
          btnColor="blue"
          btnText="Зарегистрироваться"
          formTitle="Регистрация"
        />
      </FormPage>
    </>
  );
};
export default Authorization;
