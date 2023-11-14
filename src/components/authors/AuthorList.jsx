import { useQuery } from 'react-query';

import { DataService } from '../../services/data.service';
import Author from './Author';
import { List } from '../List';

const sorts = [`По алфавиту`, `Количество цитат`];
const filters = [`Есть избранное`];
const search = 'name';

const currentAuthorList = (data) =>
  data?.map((author) => <Author key={author._id} author={author} />);

const AuthorList = () => {
  const { data, isLoading, isFetching } = useQuery([`authors`], () =>
    DataService.getData(`authors`)
  );

  return isLoading || isFetching ? (
    <p>Loading...</p>
  ) : (
    <>
      <List
        data={data}
        title="Авторы"
        loading={[isFetching, isLoading]}
        sorts={sorts}
        filters={filters}
        currentSearch={search}
        currentList={currentAuthorList}
      />
    </>
  );
};

export default AuthorList;
