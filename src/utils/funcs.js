import { DataService } from '@serv/data.service';

export function getPropertyArray(data, property) {
  return data.map((item) => item[property]);
}

export async function checkExistence(path) {
  const data = await DataService.getData(path);
  return data.length ? data : false;
}

export const deleteEmptyProperties = (obj) =>
  Object.fromEntries(Object.entries(obj).filter((v) => !!v[1]));
