import { DataService } from "../services/data.service";
import Title from "./Title.jsx";
import Author from "./Author";
import { useQuery } from "react-query";
import { useAuth } from "../hooks/useAuth";
import QuotesList from "./Quotes/QuotesList";
import { FuncService } from "../services/func.service";

const List = ({ title, author }) => {
  const { user } = useAuth();
  const { data, isLoading, isFetching } = author
    ? useQuery([`author quotes`], () =>
        DataService.getData(`quotes?author_id=${author.id}`)
      )
    : title == `Цитаты`
    ? user.name
      ? useQuery([`rec quotes`], () => DataService.getRecommendedQuotes())
      : useQuery([`quotes`], () => DataService.getData(`quotes`))
    : title == `Авторы`
    ? useQuery([`authors`], () => DataService.getData(`authors`))
    : useQuery([`fav quotes`], () => DataService.getFavoriteQuotes());
  const { data: authors } = useQuery(
    [`authors filter ${data}`],
    () =>
      DataService.getFilteredByArrayData(`authors`, `id`, [
        ...new Set(FuncService.getPropertyArray(data, `author_id`)),
      ]),
    { enabled: !!data && !author }
  );
  return (
    <>
      <div>
        <Title text={title} />
        <div className={`content`}>
          {isLoading || isFetching || (!authors && !author) ? (
            <p>Loading...</p>
          ) : !data.length ? (
            <p>{`Не найдено`}</p>
          ) : (
            <div className={`grid12`}>
              {title.includes(`Цитаты`) ? (
                <QuotesList
                  data={data}
                  authors={author ?? authors}
                  user={user}
                />
              ) : (
                data.map((author) => <Author key={author.id} author={author} />)
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default List;
