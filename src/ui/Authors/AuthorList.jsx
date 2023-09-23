import { DataService } from "../../services/data.service";
import List from "../List";
import Author from "./Author";
import { useQuery } from "react-query";

const AuthorList = ({ title }) => {
  const { data, isLoading, isFetching } = useQuery([`authors`], () =>
    DataService.getData(`authors`)
  );
  return (
    <>
      <List
        data={data}
        title={title}
        loading={[isFetching, isLoading]}
      >
        {data?.map((author) => (
          <Author key={author.id} author={author} />
        ))}
      </List>
    </>
  );
};
export default AuthorList;
