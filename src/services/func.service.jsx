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
};
