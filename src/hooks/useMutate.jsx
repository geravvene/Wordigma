import { DataService } from '@serv/data.service';
import { useMutation } from 'react-query';

import { checkExistence } from '@utils/funcs';

const useMutate = (path, check, options, func) => {
  const { mutate } = useMutation(
    [`${path} mutate`],
    async (data) => {
      if (
        await FuncService.checkExistence(
          `filter/${path}/${JSON.stringify({ [check]: data[check] })}`
        )
      )
        throw new Error(`${check} занято`);
      return (await func) ? func(path, data) : DataService.postData(path, data);
    },
    options
  );

  return mutate;
};

export default useMutate;
