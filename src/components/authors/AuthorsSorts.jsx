import FavoriteOption from './FavoriteOption';

const sorts = new Map([
  [
    'Нет',
    {
      view: (
        <option key="Нет" value={JSON.stringify({ id: 'Нет' })}>
          Нет
        </option>
      ),
      func: () => undefined,
    },
  ],
  [
    'По алфавиту',
    {
      view: (
        <option key="По алфавиту" value={JSON.stringify({ id: 'По алфавиту' })}>
          По алфавиту
        </option>
      ),
      func: () => (a, b) => a.name.localeCompare(b.name),
    },
  ],
  [
    'Объём избранного',
    {
      view: (
        <FavoriteOption
          key="Объём избранного"
          title="Объём избранного"
          id="Объём избранного"
        />
      ),
      func: (favorite) => (a, b) =>
        b.quotes.filter((el) => favorite.indexOf(el._id) != -1).length -
        a.quotes.filter((el) => favorite.indexOf(el._id) != -1).length,
    },
  ],
]);

export default sorts;
