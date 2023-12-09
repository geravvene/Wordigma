import { useMemo } from 'react';

import useResize from '@hooks/useResize';
import QuotesColumn from './QuotesColumn';

const Quotes = ({ data, user }) => {
  const width = useResize();

  const amount = width >= 1024 ? 3 : width >= 640 ? 2 : 1;

  const list = useMemo(
    () =>
      Array.from(Array(amount), (_, bigIndex) =>
        data.filter((_, index) => !((index + amount - bigIndex) % amount))
      ),
    [amount, data]
  );

  return list.map((dataColumn, index) => (
    <QuotesColumn key={index} data={dataColumn} user={user} width={width} />
  ));
};
export default Quotes;
