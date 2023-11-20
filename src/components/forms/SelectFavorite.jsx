import { useSelector } from 'react-redux';

const SelectFavorite = ({ title, properties }) => {
  const favorite = useSelector((state) => state.userReducer.favorite);

  return (
    <select className="input" {...properties}>
      <option value="">{title}</option>
      <option value={JSON.stringify({ value: true, favorite })}>
        Избранное
      </option>
      <option value={JSON.stringify({ value: false, favorite })}>
        Не избранное
      </option>
    </select>
  );
};

export default SelectFavorite;
