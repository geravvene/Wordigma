export const FuncService = {
  getPropertyArray(data, property) {
    return data.map((item) => item[property]);
  },
  isTextOverflow(quote_id) {
    return (
      $(`#text${quote_id}`).height() >=
      125 - (window.location.href.includes(`authors`) ? 0 : 25)
    );
  },
  getFilter(n, filter) {
    switch (filter) {
      case `Избранное`:
        return JSON.parse(
          window.localStorage.getItem(`user`)
        ).favorite.includes(n.id);
      case `Неизбранное`:
        return !JSON.parse(
          window.localStorage.getItem(`user`)
        ).favorite.includes(n.id);
      default:
        return true;
    }
  },
  getSort(a, b, sort) {
    switch (sort) {
      case `Длина больше`:
        return b.text.length - a.text.length;
      case `Длина меньше`:
        return a.text.length - b.text.length;
      case `По алфавиту`:
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  },
  checkFavorite(id) {
    return JSON.parse(window.localStorage.getItem(`user`)).favorite.includes(
      id
    );
  },
};
