import React from "react";
import UpLink from "./UpLink";

const Author = ({ author }) => {
  return (
    <>
      <div
        onMouseEnter={() => $(`#author${author.id}`).addClass(`h-[20%]`)}
        onMouseLeave={() => $(`#author${author.id}`).removeClass(`h-[20%]`)}
        className={`col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2 shadows h-full rounded-b-xl`}
      >
        <UpLink
          name={author.name}
          path={`/authors/${author.id}`}
          src={
            <img
              alt={`author image`}
              className={`round h-full`}
              src={author.img}
            />
          }
          height={`h-[10%]`}
          id={`author${author.id}`}
        />
      </div>
    </>
  );
};
export default Author;
