import { DataService } from "../../services/data.service";
import { useQuery } from "react-query";
import Quotes from "./Quotes";

const sorts = [`Длина больше`, `Длина меньше`];
const filters = [`Избранное`, `Неизбранное`];

const AuthorQuotesList = ({ author }) => {
  const { data, isLoading, isFetching } = useQuery([`author quotes`], () =>
    DataService.getData(`quotes?author_id=${author.id}`)
  );

  return (
    <>
      <Quotes
        data={data}
        authors={author}
        title={`Цитаты`}
        loading={[isFetching, isLoading]}
        sorts={sorts}
        filters={filters}
      />
    </>
  );
};
export default AuthorQuotesList;
