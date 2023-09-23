import { FuncService } from "../../services/func.service";
import useResize from "../../hooks/useResize";

const Quotes = ({ authors, data, user }) => {
  const width = useResize();
  return <>{FuncService.getQuotesList(data, user, authors, width)}</>;
};
export default Quotes;
