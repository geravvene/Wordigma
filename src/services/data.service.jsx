import axios from 'axios';

const server = axios.create({
  baseURL: `http://localhost:5172/`,
});

export const DataService = {
  async getData(path) {
    return (await server.get(path)).data;
  },
  async updateData(path, item) {
    return await server.put(path, item);
  },
  async postData(path, item) {
    return await server.post(path, item);
  },
  async postDataWithFile(path, item) {
    var form_data = new FormData();
    for (var key in item) {
      form_data.append(key, item[key]);
    }
    return await server.postForm(path, form_data);
  },
};
