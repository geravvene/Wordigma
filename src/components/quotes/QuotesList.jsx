import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';

import { DataService } from '@serv/data.service';
import kinds from './QuotesListKinds';
import Quotes from './Quotes';
import { List } from '@comp/List';

const currentList = (user, data) => <Quotes data={data} user={user} />;

const QuotesList = ({ title, author }) => {
  const user_id = useSelector((state) => state.userReducer?._id);

  const { data, isLoading, isFetching } = useQuery(
    [title],
    () => DataService.getData(kinds.get(title).path(user_id)),
    { enabled: !author }
  );

  const currentQuotesList = currentList.bind(null, user_id);
  
  return (
    <>
      <List
        data={data ?? author?.quotes}
        title={title}
        loading={[isFetching, isLoading]}
        sorts={kinds.get(title).sorts}
        filters={kinds.get(title).filters}
        currentSearch={'text'}
        currentList={currentQuotesList}
      />
    </>
  );
};
export default QuotesList;
