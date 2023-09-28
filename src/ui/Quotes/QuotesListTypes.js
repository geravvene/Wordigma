const sorts = [`Длина больше`, `Длина меньше`];
const filters = [`Избранное`, `Неизбранное`];
export const types = new Map([
  [
    "Цитаты",
    {
      sorts: sorts,
      path: (user) => (user._id ? `quotes/rec/${user._id}` : `quotes`),
    },
  ],
  [
    "Избранные цитаты",
    {
      sorts: sorts,
      path: (user) => `quotes/fav/${user._id}`,
    },
  ],
  [
    "Цитаты автора",
    {
      sorts: sorts,
      filters: filters,
    },
  ],
]);
