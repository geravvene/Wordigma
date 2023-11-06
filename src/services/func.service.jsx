import { DataService } from './data.service';

export const FuncService = {
  getPropertyArray(data, property) {
    return data.map((item) => item[property]);
  },
  
  async checkExistence(path) {
    const data = await DataService.getData(path);
    return data.length ? data : false;
  },
};
