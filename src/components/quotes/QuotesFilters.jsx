import SelectAuthor from '@forms/SelectAuthor';
import SelectFavorite from '@forms/SelectFavorite';

const filters = [
  (onChange) => (
    <SelectAuthor
      key={0}
      properties={{
        onChange: (e) => {
          onChange({
            author: e.target.value
              ? (n) => n.author._id === JSON.parse(e.target.value)._id
              : null,
          });
        },
      }}
      title="Автор"
    />
  ),
  (onChange) => (
    <SelectFavorite
      key={1}
      properties={{
        onChange: (e) => {
          if (e.target.value === '') {
            onChange({ favorite: null });
            return;
          }
          const { value, favorite } = JSON.parse(e.target.value);
          onChange({
            favorite: value
              ? (n) => favorite.includes(n._id)
              : (n) => !favorite.includes(n._id),
          });
        },
      }}
      title="Все"
    />
  ),
];

export default filters;
