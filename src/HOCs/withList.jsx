import { useState } from 'react';

import Title from '../ui/Others/Title.jsx';
import SelectionBar from '../ui/Options/SelectionBar.jsx';


const getFilter = (n, filter) => {
  switch (filter) {
    case `Избранное`:
      console.log(n);
      return JSON.parse(window.localStorage.getItem(`user`)).favorite.includes(
        n._id
      );
    case `Неизбранное`:
      return !JSON.parse(window.localStorage.getItem(`user`)).favorite.includes(
        n._id
      );
    case `Есть избранное`:
      const favorite = JSON.parse(window.localStorage.getItem(`user`)).favorite;
      for (let i = 0; i < n.quotes.length; i++) {
        for (let index = 0; index < favorite.length; index++) {
          if (n.quotes[i]._id == favorite[index]) return true;
        }
      }
      return false;
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
    case `Количество цитат`:
      return b.quotes.length - a.quotes.length;
    case `Количество избранных цитат`:
      const favorite = JSON.parse(window.localStorage.getItem(`user`)).favorite;
      let a_amount = 0,
        b_amount = 0;
      for (
        let i = 0;
        i <
        (a.quotes.length < b.quotes.length ? b.quotes.length : a.quotes.length);
        i++
      ) {
        for (let index = 0; index < favorite.length; index++) {
          if (a.quotes[i]?._id == favorite[index]) a_amount++;
          if (b.quotes[i]?._id == favorite[index]) b_amount++;
        }
      }
      return b_amount - a_amount;
    case `Дата добавления`:
      var order = JSON.parse(window.localStorage.getItem(`user`)).favorite;
      return order.indexOf(b._id) - order.indexOf(a._id);
    default:
      return 0;
  }
};

export const withList = (Component) => (props) => {
  const [search, setSearch] = useState(``);
  const [filter, setFilter] = useState();
  const [sort, setSort] = useState();
  const data = props.data
    ?.filter((n) => getFilter(n, filter))
    .sort((a, b) => getSort(a, b, sort))
    .filter((n) => n[props.search].match(new RegExp(search, `i`)));
  return (
    <>
      <Title text={props.title}>
        <input
          className="input ml-3 mt-[0.15rem]"
          placeholder={`Search...`}
          onChange={(e) => setSearch(e.target.value)}
        />

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
