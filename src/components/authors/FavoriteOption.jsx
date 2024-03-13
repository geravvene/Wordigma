import { useSelector } from 'react-redux';

const FavoriteOption = ({ id, title }) => {
  const favorite = useSelector((state) => state.userReducer?.favorite);

  return (
    <option value={JSON.stringify({ id: id, obj: favorite })}>
      {title}
    </option>
  );
};

export default FavoriteOption;
