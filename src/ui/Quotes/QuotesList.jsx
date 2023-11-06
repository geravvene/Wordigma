import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';

import { DataService } from '../../services/data.service';
import { types } from './QuotesListTypes.js';
import Quotes from './Quotes';

const QuotesList = ({ title, author }) => {
  const user_id = useSelector((state) => state.userReducer._id);

  const { data, isLoading, isFetching } = useQuery(
    [title],
    () => DataService.getData(types.get(title).path(user_id)),
    { enabled: !author }
  );
  
  return (
    <>
      <Quotes
        data={data ?? author?.quotes}
        title={title}
        loading={[isFetching, isLoading]}
        sorts={types.get(title).sorts}
        filters={types.get(title).filters}
        user={user_id}
        search={'text'}
      />
    </>
  );
};
export default QuotesList;
