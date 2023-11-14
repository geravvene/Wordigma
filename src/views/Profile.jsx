import { useSelector } from 'react-redux';
import { Navigate, Link } from 'react-router-dom';

import Title from '../components/Title.jsx';
import ClassicBtn from '../ui/buttons/ClassicBtn.jsx';
import QuotesList from '../components/Quotes/QuotesList.jsx';
import useActions from '../hooks/useActions.jsx';

const Profile = () => {
  const user = useSelector((state) => state.userReducer);

  const { change, clearFavorite } = useActions();
  
  return !user ? (
    <Navigate to="/reg" />
  ) : (
    <>
      <Title text={user.name}></Title>
      <div className={`content`}>
        <div className={`flex justify-between w-fit gap-3`}>
          <img
            alt={`acc_icon`}
            className={`rounded-xl w-[5.5rem] h-[5.5rem]`}
            src={user.img}
          />
          <div className={`flexcol justify-between pb-[0.1rem] `}>
            <ClassicBtn
              arg={{ onClick: () => change(null) }}
              rounded={`rounded-md`}
              color={`bg-red`}
              className={`w-full`}
            >
              Выход
            </ClassicBtn>
            <ClassicBtn
              arg={{ onClick: () => clearFavorite() }}
              rounded={`rounded-lg`}
              color={`bg-blue`}
            >
              Очистить избранное
            </ClassicBtn>
          </div>

          <div className={`flexcol justify-between pb-[0.1rem] `}>
            <Link to={`/create`}>
              <ClassicBtn
                rounded={`rounded-md`}
                color={`bg-green`}
                className={`w-full`}
              >
                Создать
              </ClassicBtn>
            </Link>
          </div>
        </div>
        <QuotesList title={`Избранные цитаты`} />
      </div>
    </>
  );
};
export default Profile;
