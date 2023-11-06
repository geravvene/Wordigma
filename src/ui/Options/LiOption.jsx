const LiOption = ({ children, focus, func, arg }) => {
  return (
    <li
      onClick={func}
      {...arg}
      className={`cursor-pointer duration-200 flex gap-1 items-center pr-3 border-r-gray-dark hover:border-r-gray-light ${
        focus ? `border-l-2 pl-3 border-l-gray-light border-r-0` : `border-r-2`
      }`}
    >
      {children}
    </li>
  );
};

export default LiOption;
