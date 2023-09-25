import Author from "./Author";
import { withList } from "../../HOCs/withList";

const Authors = ({ data }) => {
  return data?.map((author) => <Author key={author.id} author={author} />);
};
export default withList(Authors);
