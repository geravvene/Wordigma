import { withList } from '../../HOCs/withList';
import useResize from '../../hooks/useResize';
import QuotesColumn from './QuotesColumn';

const Quotes = ({ data, user }) => {
  const width = useResize();
  let list = [];
  let amount = width >= 1024 ? 3 : width >= 640 ? 2 : 1;
  for (let i = 0; i < amount; i++) {
    list.push(
      <QuotesColumn
        key={i}
        data={data.filter((item, index) => !((index + amount - i) % amount))}
        user={user}
        width={width}
      />
    );
  }
  return list;
};
export default withList(Quotes);
