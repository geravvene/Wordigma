import { useParams } from "react-router-dom";
import { DataService } from "../services/data.service.jsx";
import Title from "../ui/Title.jsx";
import WikiFrame from "../ui/WikiFrame.jsx";
import List from "../ui/List.jsx";
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
      <Title text={data[0].name} />
      <div className={`content`}>
        <WikiFrame url={data[0].url} />
        <List title={`Цитаты`} author={data[0]} />
      </div>
    </>
  );
};
export default AuthorPage;
