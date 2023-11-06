import { useParams } from 'react-router-dom';
import { DataService } from '../services/data.service.jsx';
import Title from '../ui/Title.jsx';
import WikiFrame from '../ui/WikiFrame.jsx';
import QuotesList from '../ui/Quotes/QuotesList.jsx';
import { useQuery } from 'react-query';

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
