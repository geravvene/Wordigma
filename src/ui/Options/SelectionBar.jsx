import ClassicBtn from "../Buttons/ClassicBtn";
import { VscSortPrecedence } from "react-icons/vsc";
import { useState } from "react";
import LiOption from "../LiOption";
import UlMenu from "../UlMenu";

const SelectionBar = ({ sorts, filters, fltr, setFilter, srt, setSort }) => {
  const [active, setActive] = useState(false);
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
                      arg={{ onClick: () => setFilter(filter) }}
                    >
                      {filter}
                    </LiOption>
                  ))}
                </UlMenu>
              ) : (
                <></>
              )}
              {sorts ? (
                <UlMenu text={`Сортировка`}>
                  {sorts.map((sort) => (
                    <LiOption
                      key={sort}
                      focus={srt == sort}
                      arg={{ onClick: () => setSort(sort) }}
                    >
                      {sort}
                    </LiOption>
                  ))}
                </UlMenu>
              ) : (
                <></>
              )}
            </>
          ) : (
            <></>
          )}

          <div>
            <ClassicBtn
              color={`bg-gray`}
              rounded={`rounded-tr-md rounded-bl-md`}
              arg={{ onClick: () => setActive(!active) }}
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
