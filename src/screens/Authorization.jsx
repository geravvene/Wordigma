import Entry from '../ui/Forms/Entry';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import FormPage from '../ui/Forms/FormPage';
import { useState } from 'react';
import useActions from '../hooks/useActions';

const Authorization = () => {
  const user = useSelector((state) => state.userReducer._id);
  const { change } = useActions();
  const [text, setText] = useState(
    'Без авторизации вы не сможете добавлять цитаты в избранное'
  );
  return user ? (
    <Navigate to="/rec" />
  ) : (
    <>
      <FormPage text={text}>
        <Entry setUser={change} setText={setText} />
        <Entry setText={setText} />
      </FormPage>
    </>
  );
};
export default Authorization;
