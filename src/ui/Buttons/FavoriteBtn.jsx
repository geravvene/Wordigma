import { memo } from 'react';
import { useSelector } from 'react-redux';
import { VscHeart } from 'react-icons/vsc';
import { VscHeartFilled } from 'react-icons/vsc';

import ClassicBtn from './ClassicBtn';
import useActions from '../../hooks/useActions';


const FavoriteBtn = ({ quote_id }) => {
  const isFavorite = useSelector(
    (state) => state.userReducer.favorite
  ).includes(quote_id);
  const { toggleFavorite } = useActions();
  return (
    <>
      <ClassicBtn
        arg={{ onClick: () => toggleFavorite(quote_id) }}
        rounded={`rounded-tr-md rounded-bl-xl`}
        shadow={`shadow shadow-black`}
        color={isFavorite ? `bg-green` : `bg-blue`}
      >
        {isFavorite ? (
          <VscHeartFilled size={`1.25rem`} color="white" />
        ) : (
          <VscHeart size={`1.25rem`} color="white" />
        )}
      </ClassicBtn>
    </>
  );
};
export default memo(FavoriteBtn);
