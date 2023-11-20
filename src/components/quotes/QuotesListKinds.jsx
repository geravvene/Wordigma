import sorts from './QuoteSorts';
import filters from './QuotesFilters';

const kinds = new Map([
  [
    'Цитаты',
    {
      sorts: sorts,
      path: (user) => (user ? `quotes/rec/${user}` : `quotes`),
      filters: filters,
    },
  ],
  [
    'Избранные цитаты',
    {
      sorts: sorts,
      path: (user) => `quotes/fav/${user}`,
      filters: [filters[0]],
    },
  ],
  [
    'Цитаты автора',
    {
      sorts: sorts,
      filters: [filters[1]],
    },
  ],
]);

export default kinds;
