import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import FormPage from '../ui/Forms/FormPage';
import useActions from '../hooks/useActions';
import Entry from '../ui/Forms/Entry';

const Authorization = () => {
  const user_id = useSelector((state) => state.userReducer?._id);

  const { change } = useActions();

  const [text, setText] = useState(
    'Без авторизации вы не сможете добавлять цитаты в избранное'
  );
  
  return user_id ? (
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
