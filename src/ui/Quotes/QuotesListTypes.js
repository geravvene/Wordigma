const sorts = [`Дата добавления`, `Длина больше`, `Длина меньше`];
const filters = [`Избранное`, `Неизбранное`];
export const types = new Map([
  [
    'Цитаты',
    {
      sorts: sorts.slice(1),
      path: (user) => (user ? `quotes/rec/${user._id}` : `quotes`),
    },
  ],
  [
    'Избранные цитаты',
    {
      sorts: sorts,
      path: (user) => `quotes/fav/${user._id}`,
    },
  ],
  [
    'Цитаты автора',
    {
      sorts: sorts,
      filters: filters,
    },
  ],
]);
