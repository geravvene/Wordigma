import React from 'react';
import ClassicBtn from './ClassicBtn';
import { VscHeart } from 'react-icons/vsc';
import { VscHeartFilled } from 'react-icons/vsc';
import useActions from '../../hooks/useActions';
import { useSelector } from 'react-redux';

const FavoriteBtn = ({ quote }) => {
  const isFavorite = useSelector(
    (state) => state.userReducer.favorite
  ).includes(quote._id);
  const { toggleFavorite } = useActions();
  return (
    <>
      <ClassicBtn
        arg={{ onClick: () => toggleFavorite(quote._id) }}
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
export default FavoriteBtn;
