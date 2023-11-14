import { useState, useCallback } from 'react';
import { VscSortPrecedence } from 'react-icons/vsc';

import LiOption from '../ui/li/LiOption';
import UlMenu from '../ui/ul/UlMenu';
import ClassicBtn from '../ui/Buttons/ClassicBtn';

const SelectionBar = ({ sorts, filters, fltr, setFilter, srt, setSort }) => {
  const [active, setActive] = useState(false);

  const handleSetFilter = useCallback(
    (e) => {
      setFilter(e.target.textContent);
    },
    [setFilter]
  );

  const handleSetSort = useCallback(
    (e) => {
      setSort(e.target.textContent);
    },
    [setSort]
  );

  const toggleActive = () => setActive(!active);

  return (
    <>
      <div
        className={`absolute top-[0.15rem] right-0 z-10 round ${
          active ? `bg-gray-dark` : ``
        }`}
      >
        <div className={`flex`}>
          {active ? (
            <>
              {filters ? (
                <UlMenu text={`Фильтр`}>
                  {filters.map((filter) => (
                    <LiOption
                      key={filter}
                      focus={fltr == filter}
                      func={handleSetFilter}
                    >
                      {filter}
                    </LiOption>
                  ))}
                </UlMenu>
              ) : null}
              {sorts ? (
                <UlMenu text={`Сортировка`}>
                  {sorts.map((sort) => (
                    <LiOption
                      key={sort}
                      focus={srt == sort}
                      func={handleSetSort}
                    >
                      {sort}
                    </LiOption>
                  ))}
                </UlMenu>
              ) : null}
            </>
          ) : null}

          <div>
            <ClassicBtn
              color={`bg-gray`}
              rounded={`rounded-tr-md rounded-bl-md`}
              func={toggleActive}
            >
              <VscSortPrecedence />
            </ClassicBtn>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectionBar;
