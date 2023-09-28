import Title from "../ui/Title.jsx";
import SelectionBar from "../ui/Options/SelectionBar.jsx";
import { useState } from "react";

const getFilter = (n, filter) => {
  switch (filter) {
    case `Избранное`:
      return JSON.parse(window.localStorage.getItem(`user`)).favorite.includes(
        n.id
      );
    case `Неизбранное`:
      return !JSON.parse(window.localStorage.getItem(`user`)).favorite.includes(
        n.id
      );
    default:
      return true;
  }
};
const getSort = (a, b, sort) => {
  switch (sort) {
    case `Длина больше`:
      return b.text.length - a.text.length;
    case `Длина меньше`:
      return a.text.length - b.text.length;
    case `По алфавиту`:
      return a.name.localeCompare(b.name);
    default:
      return 0;
  }
};

export const withList = (Component) => (props) => {
  const [filter, setFilter] = useState();
  const [sort, setSort] = useState();
  const data = props.data
    ?.filter((n) => getFilter(n, filter))
    .sort((a, b) => getSort(a, b, sort));

  return (
    <>
      <Title text={props.title}>
        <SelectionBar
          sorts={props.sorts}
          filters={props.filters}
          fltr={filter}
          setFilter={setFilter}
          srt={sort}
          setSort={setSort}
        />
      </Title>
      <div className={`content`}>
        {props.loading.includes(true) ? (
          <p>Loading...</p>
        ) : !data?.length ? (
          <p>{`Не найдено`}</p>
        ) : (
          <div className={`grid12`}>
            <Component user={props.user} data={data} />
          </div>
        )}
      </div>
    </>
  );
};
