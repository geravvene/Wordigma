import { DataService } from "../../services/data.service";
import Authors from "./Authors";
import { useQuery } from "react-query";

const sorts = [`По алфавиту`];

const AuthorList = () => {
  const { data, isLoading, isFetching } = useQuery([`authors`], () =>
    DataService.getData(`authors`)
  );
  return (
    <>
      <Authors
        data={data}
        title={`Авторы`}
        loading={[isFetching, isLoading]}
        sorts={sorts}
      />
    </>
  );
};
export default AuthorList;
