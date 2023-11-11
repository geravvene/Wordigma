import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';

import { DataService } from '../../services/data.service';
import { types } from './QuotesListTypes.js';
import Quotes from './Quotes';
import { List } from '../MainInterface/List.jsx';

const currentList = (user, data) => <Quotes data={data} user={user} />;

const QuotesList = ({ title, author }) => {
  const user_id = useSelector((state) => state.userReducer._id);

  const { data, isLoading, isFetching } = useQuery(
    [title],
    () => DataService.getData(types.get(title).path(user_id)),
    { enabled: !author }
  );

  const currentQuotesList = currentList.bind(null, user_id);
  
  return (
    <>
      <List
        data={data ?? author?.quotes}
        title={title}
        loading={[isFetching, isLoading]}
        sorts={types.get(title).sorts}
        filters={types.get(title).filters}
        currentSearch={'text'}
        currentList={currentQuotesList}
      />
    </>
  );
};
export default QuotesList;
