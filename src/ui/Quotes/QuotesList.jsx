import { DataService } from "../../services/data.service";
import { useQuery } from "react-query";
import Quotes from "./Quotes";
import { useAuth } from "../../hooks/useAuth";
import {types} from "./QuotesListTypes.js";

const QuotesList = ({ title, author }) => {
  const { user } = useAuth();
  const { data, isLoading, isFetching } = useQuery(
    [title],
    () => DataService.getData(types.get(title).path(user)),
    { enabled: !author }
  );
  return (
    <>
      <Quotes
        data={data ?? author?.quotes}
        title={title}
        loading={[isFetching, isLoading]}
        sorts={types.get(title)?.sorts}
        filters={types.get(title)?.filters}
        user={user}
        search={"text"}
      />
    </>
  );
};
export default QuotesList;
