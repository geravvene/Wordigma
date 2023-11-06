import { memo } from "react";
import { Link } from "react-router-dom";

const UpLink = ({ name, children, style, id, path }) => {
  return (
    <>
      <Link to={path}>
        {children}
        <div
          id={id}
          className={`absolute bottom-0 flex bg-gray w-full justify-center items-center rounded-b-lg duration-150 ${style}`}
        >
          {name}
        </div>
      </Link>
    </>
  );
};
export default memo(UpLink);

