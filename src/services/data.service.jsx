import axios from "axios";

const axiosInstanse = axios.create({
  baseURL: `http://localhost:4200`,
});
let user;

export const DataService = {
  async setUser(data) {
    user = data;
    window.localStorage.setItem(`user`, JSON.stringify(user));
  },
  async getData(path) {
    return (await axiosInstanse.get(path).catch((err) => console.log(err)))
      .data;
  },
  async getFilteredByArrayData(path, property, filterArray) {
    return (
      await axiosInstanse
        .get(path, {
          params: { [property]: filterArray },
        })
        .catch((err) => console.log(err))
    ).data;
  },
  async getFavoriteQuotes() {
    return user.favorite.length
      ? await DataService.getFilteredByArrayData(`quotes`, `id`, user.favorite)
      : [];
  },

  async postUserRegistrationData(data) {
    if ((await DataService.getData(`users?name=${data.username}`))[0])
      throw new Error("Имя занято");
    return axiosInstanse.post(`users`, {
      name: data.username,
      password: data.password,
      favorite: [],
      img: `https://conceptwindows.com.au/wp-content/uploads/no-profile-pic-icon-27.png`,
    });
  },

  async patchFavoriteArray(add, id) {
    if (
      (user.favorite.includes(id) && add) ||
      (!user.favorite.includes(id) && !add)
    )
      return;
    user.favorite = add
      ? user.favorite.concat([id])
      : user.favorite.filter((num) => num !== id);
    window.localStorage.setItem(`user`, JSON.stringify(user));
    return axiosInstanse
      .patch(`users/${user.id}`, {
        favorite: add
          ? user.favorite.concat([id])
          : user.favorite.filter((num) => num !== id),
      })
      .catch((err) => console.log(err));
  },
  async clearFavoriteArray() {
    return axiosInstanse
      .patch(`users/${user.id}`, {
        favorite: [],
      })
      .catch((err) => console.log(err))
      .then(async () => this.setUser(await this.getData(`users/${user.id}`)));
  },

  async getRecommendedQuotes() {
    return !user.favorite
      ? this.getData(`quotes`)
      : (await this.getData(`quotes`)).filter(
          (n) => !user.favorite.includes(n.id)
        );
  },

  async checkFavorite(id) {
    return user.favorite.includes(id);
  },

  async checkAuthorization(data, setUser, setText) {
    const acc = (await DataService.getData(`users?name=${data.username}`))[0];
    return acc
      ? acc.password == data.password
        ? setUser(acc)
        : setText(`Неверный пароль`)
      : setText(`Пользователь не найден`);
  },
};
