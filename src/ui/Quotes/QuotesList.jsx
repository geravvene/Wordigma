import { DataService } from "../../services/data.service";
import { useQuery } from "react-query";
import { useAuth } from "../../hooks/useAuth";
import Quotes from "./Quotes";
import { FuncService } from "../../services/func.service";
import List from "../List";

const QuotesList = ({ title, author }) => {
  const { user } = useAuth();
  const { data, isLoading, isFetching } = useQuery([`quotes`], () =>
    DataService.getData(`quotes`)
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
    { enabled: !!data && !author }
  );
  return (
    <>
      <List
        data={FuncService.getList(
          data,
          title,
          JSON.parse(window.localStorage.getItem(`user`)),
          author?.id
        )}
        title={title}
        loading={[isFetching, isLoading, isFetching2, isLoading2]}
      >
        <Quotes
          data={FuncService.getList(
            data,
            title,
            JSON.parse(window.localStorage.getItem(`user`)),
            author?.id
          )}
          authors={author ?? authors}
          user={user}
        />
      </List>
    </>
  );
};
export default QuotesList;
