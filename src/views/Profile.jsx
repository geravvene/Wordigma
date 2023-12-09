import { useSelector } from 'react-redux';
import { Navigate, Link } from 'react-router-dom';

import Title from '@comp/Title.jsx';
import ClassicBtn from '@ui/buttons/ClassicBtn';
import QuotesList from '@comp/Quotes/QuotesList';
import useActions from '@hooks/useActions';

const Profile = () => {
  const user = useSelector((state) => state.userReducer);

  const { change, clearFavorite } = useActions();

  return !user ? (
    <Navigate to="/reg" />
  ) : (
    <>
      <Title text={user.name}></Title>
      <div className={`content`}>
        <div className="flex gap-3">
          <img
            alt={`acc_icon`}
            className={`rounded-xl w-[5.5rem] h-[5.5rem]`}
            src={user.img}
          />
          <div className={`grid12-3 w-[100%] sm:w-[30%]`}>
            <ClassicBtn
              arg={{ onClick: () => change(null) }}
              rounded={`rounded-md`}
              color={`bg-red`}
              className={`col-span-6`}
            >
              Выход
            </ClassicBtn>
            

            <ClassicBtn
              rounded={`rounded-md`}
              color={`bg-green`}
              className={`col-span-6`}
            >
              <Link to={`/create`}>Создать</Link>
            </ClassicBtn>
            <ClassicBtn
              arg={{ onClick: () => clearFavorite() }}
              rounded={`rounded-lg`}
              color={`bg-blue`}
              className={`col-span-12`}
            >
              Очистить избранное
            </ClassicBtn>
          </div>
        </div>
        <QuotesList title={`Избранные цитаты`} />
      </div>
    </>
  );
};
export default Profile;
