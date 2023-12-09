import SelectFavorite from '@forms/SelectFavorite';

const filters = [
  (onChange) => (
    <SelectFavorite
      key={0}
      properties={{
        onChange: (e) => {
          if (e.target.value === '') {
            onChange({ favorite: null });
            return;
          }
          const { value, favorite } = JSON.parse(e.target.value);
          onChange({
            favorite: value
              ? (n) => n.quotes.some((quote) => favorite.includes(quote._id))
              : (n) => n.quotes.every((quote) => !favorite.includes(quote._id)),
          });
        },
      }}
      title="Все"
    />
  ),
  (onChange) => (
    <input
      className="input"
      type="number"
      placeholder="Минимум цитат"
      key={1}
      onChange={(e) => {
        onChange({
          amount:
            e.target.value === ''
              ? null
              : (n) => n.quotes.length >= e.target.value,
        });
      }}
    />
  ),
];

export default filters;
