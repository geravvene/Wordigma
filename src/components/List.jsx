import { useCallback, useState } from 'react';

import Title from './Title';
import SelectionBar from '@forms/SelectionBar';
import {deleteEmptyProperties} from '@utils/funcs'

export const List = ({
  data,
  title,
  loading,
  sorts,
  filters,
  currentSearch,
  currentList,
}) => {
  const [currentFilter, setFilter] = useState({});

  const [currentSort, setSort] = useState({ sort: undefined, reverse: false });

  const filterData = data
    ?.filter((obj) =>
      Object.values(deleteEmptyProperties(currentFilter)).every((filter) =>
        filter(obj)
      )
    )
    .sort(currentSort.sort);

  const handleSearch = useCallback(
    (e) => {
      setFilter((prev) => ({
        ...prev,
        search: e.target.value
          ? (n) => n[currentSearch].match(new RegExp(e.target.value, `i`))
          : null,
      }));
    },
    [setFilter, currentSearch]
  );

  const changeFilter = useCallback(
    (obj) => {
      setFilter((prev) => ({
        ...prev,
        ...obj,
      }));
    },
    [setFilter]
  );

  const changeSort = useCallback(
    (obj) => {
      setSort((prev) => ({
        ...prev,
        ...obj,
      }));
    },
    [setSort]
  );

  return (
    <>
      <Title text={title}>
        <input
          className="input ml-3 mt-[0.15rem]"
          placeholder={`Search...`}
          onChange={handleSearch}
        />

        <SelectionBar
          sorts={sorts}
          filters={filters}
          setFilter={changeFilter}
          setSort={changeSort}
        />
      </Title>
      <div className={`content`}>
        {loading.includes(true) ? (
          <p>Loading...</p>
        ) : !filterData?.length ? (
          <p>{`Не найдено`}</p>
        ) : (
          <div className={`grid12`}>
            {currentList(
              currentSort.reverse ? filterData.reverse() : filterData
            )}
          </div>
        )}
      </div>
    </>
  );
};
