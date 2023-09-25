import Title from "../ui/Title.jsx";
import SelectionBar from "../ui/Options/SelectionBar.jsx";
import { useState } from "react";
import { FuncService } from "../services/func.service.jsx";
import { useAuth } from "../hooks/useAuth.jsx";

export const withList = (Component) => (props) => {
  const { user } = useAuth();
  const [filter, setFilter] = useState();
  const [sort, setSort] = useState();
  const data = props.data
    ?.filter((n) => FuncService.getFilter(n, filter))
    .sort((a, b) => FuncService.getSort(a, b, sort));

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
        ) : !data.length ? (
          <p>{`Не найдено`}</p>
        ) : (
          <div className={`grid12`}>
            <Component {...props} data={data} user={user} />
          </div>
        )}
      </div>
    </>
  );
};
