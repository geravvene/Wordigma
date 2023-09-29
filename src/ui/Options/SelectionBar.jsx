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
                <UlMenu text={`Фильтр`} style={`pt-1`}>
                  {filters.map((filter) => (
                    <LiOption
                      key={filter}
                      focus={fltr == filter}
                      func={setFilter}
                      arg={filter}
                    >
                      {filter}
                    </LiOption>
                  ))}
                </UlMenu>
              ) : (
                <></>
              )}
              {sorts ? (
                <UlMenu text={`Сортировка`} style={`pt-1`}>
                  {sorts.map((sort) => (
                    <LiOption
                      key={sort}
                      focus={srt == sort}
                      func={setSort}
                      arg={sort}
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
              func={setActive}
              arg={!active}
              color={`bg-gray`}
              rounded={`rounded-tr-md rounded-bl-md`}
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
