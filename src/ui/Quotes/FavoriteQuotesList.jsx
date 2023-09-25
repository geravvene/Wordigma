import { DataService } from "../../services/data.service";
import { useQuery } from "react-query";
import Quotes from "./Quotes";
import { FuncService } from "../../services/func.service";

const sorts = [`Длина больше`, `Длина меньше`];

const FavoriteQuotesList = () => {
  const { data, isLoading, isFetching } = useQuery([`fav quotes`], () =>
    DataService.getFavoriteQuotes()
  );
  const {
    data: authors,
    isLoading: isLoading2,
    isFetching: isFetching2,
  } = useQuery(
    [`authors filter ${data}`],
    () =>
      DataService.getFilteredByArrayData(`authors`, `id`, [
        ...new Set(FuncService.getPropertyArray(data, `author_id`)),
      ]),
    { enabled: !!data}
  );
  return (
    <>
      <Quotes
        data={data}
        authors={authors}
        title={`Избранные цитаты`}
        loading={[isFetching, isLoading, isFetching2, isLoading2]}
        sorts={sorts}
      />
    </>
  );
};
export default FavoriteQuotesList;
