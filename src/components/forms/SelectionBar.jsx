import { useState } from 'react';
import { VscSortPrecedence } from 'react-icons/vsc';

import UlMenu from '@ui/ul/UlMenu';
import ClassicBtn from '@ui/buttons/ClassicBtn';
import SelectSort from './SelectSort';

const SelectionBar = ({ sorts, filters, setFilter, setSort }) => {
  const [active, setActive] = useState(false);

  const toggleActive = () => setActive((prev) => !prev);

  return (
    <>
      <div
        className={`absolute top-[0.15rem] right-0 z-10 round ${
          active ? `bg-gray-dark` : ``
        }`}
      >
        <div className={`flex`}>
          {active ? (
            <div className="flexcol">
              {filters.length ? (
                <UlMenu text={`Фильтр`}>
                  {filters.map((filter) => filter(setFilter))}
                </UlMenu>
              ) : null}
              {sorts.size ? (
                <UlMenu text={`Сортировка`}>
                  <SelectSort sorts={sorts} onChange={setSort} />
                </UlMenu>
              ) : null}
            </div>
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
