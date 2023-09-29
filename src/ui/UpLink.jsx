import React from "react";
import { Link } from "react-router-dom";

const UpLink = ({ name, children, height, id, path}) => {
  return (
    <>
      <Link to={path} className={`relative`}>
        {children}
        <div id={id} className={`absolute bottom-0 flex bg-gray w-full justify-center items-center rounded-b-lg duration-150 ${height}`}>
          {name}
        </div>
      </Link>
    </>
  );
};
export default UpLink;
