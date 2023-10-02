import { DataService } from "../../services/data.service";
import Authors from "./Authors";
import { useQuery } from "react-query";

const sorts = [`По алфавиту`, `Количество цитат`, `Количество избранных цитат`];
const filters = [`Есть избранное`];
const search = "name";

const AuthorList = () => {
  const { data, isLoading, isFetching } = useQuery([`authors`], () =>
    DataService.getData(`authors`)
  );
  return isLoading || isFetching ? (
    <p>Loading...</p>
  ) : (
    <>
      <Authors
        data={data}
        title={`Авторы`}
        loading={[isFetching, isLoading]}
        sorts={sorts}
        filters={filters}
        search={search}
      />
    </>
  );
};
export default AuthorList;
