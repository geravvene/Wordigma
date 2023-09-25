import { useParams } from "react-router-dom";
import { DataService } from "../services/data.service.jsx";
import Title from "../ui/Title.jsx";
import WikiFrame from "../ui/WikiFrame.jsx";
import AuthorQuotesList from "../ui/Quotes/AuthorQuotesList.jsx";
import { useQuery } from "react-query";

const AuthorPage = () => {
  const { id } = useParams();
  const { data, isLoading, isFetching } = useQuery([`author`], () =>
    DataService.getData(`authors?id=${id}`)
  );
  return isLoading || isFetching ? (
    <p>Loading...</p>
  ) : (
    <>
      <Title text={data[0].name}></Title>
      <div className={`content`}>
        <WikiFrame url={data[0].url} />
        <AuthorQuotesList author={data[0]} />
      </div>
    </>
  );
};
export default AuthorPage;
