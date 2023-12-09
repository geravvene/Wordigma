import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import { DataService } from '@serv/data.service.jsx';
import Title from '@comp/Title.jsx';
import WikiFrame from '@comp/WikiFrame.jsx';
import QuotesList from '@comp/Quotes/QuotesList.jsx';


const AuthorPage = () => {
  const { id } = useParams();

  const { data, isLoading, isFetching } = useQuery([`author`], () =>
    DataService.getData(`authors/${id}`)
  );
  
  return isLoading || isFetching ? (
    <p>Loading...</p>
  ) : (
    <>
      <Title text={data.name}></Title>
      <div className={`content`}>
        <WikiFrame url={data.url} />
        <QuotesList author={data} title={`Цитаты автора`} />
      </div>
    </>
  );
};
export default AuthorPage;
