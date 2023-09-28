import { DataService } from "./data.service";
export const FuncService = {
  getPropertyArray(data, property) {
    return data.map((item) => item[property]);
  },
  checkFavorite(id) {
    return JSON.parse(window.localStorage.getItem(`user`)).favorite.includes(
      id
    );
  },
  async checkExistence(path) {
    const data = await DataService.getData(path);
    return data.length ? data : false;
  },
  async UpdateLocalFavorite(mode, quote_id) {
    let user = JSON.parse(window.localStorage.getItem(`user`));
    switch (mode) {
      case `add`:
        return window.localStorage.setItem(
          `user`,
          JSON.stringify({
            ...user,
            favorite: user.favorite.concat([quote_id]),
          })
        );
      case `del`:
        return window.localStorage.setItem(
          `user`,
          JSON.stringify({
            ...user,
            favorite: user.favorite.filter((n) => n != quote_id),
          })
        );
      case `clear`:
        return window.localStorage.setItem(
          `user`,
          JSON.stringify({
            ...user,
            favorite: [],
          })
        );
      default:
        return;
    }
  },
};
