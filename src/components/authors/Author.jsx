import { useCallback } from 'react';

import UpLink from '../UpLink';

const Author = ({ author }) => {
  const onHover = useCallback(() => {
    $(`#author${author._id}`).toggleClass(`h-[30%]`);
  }, []);

  return (
    <>
      <div
        onMouseEnter={onHover}
        onMouseLeave={onHover}
        className={`col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2 shadows h-full rounded-b-xl aspect-[3/4] relative`}
      >
        <UpLink
          name={author.name}
          path={`/authors/${author._id}`}
          style={`h-[15%]`}
          id={`author${author._id}`}
        >
          <img
            alt={`author image`}
            className={`round h-full object-cover w-full`}
            src={author.img}
          />
        </UpLink>
      </div>
    </>
  );
};

export default Author;
