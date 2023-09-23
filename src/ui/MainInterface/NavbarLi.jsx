import { Link } from "react-router-dom";

const NavbarLi = ({ text, children }) => {
  return (
    <li className={`pt-6`}>
      <Link
        to={text.href}
        className={`duration-200 flex gap-1 items-center pr-3 border-r-gray-dark hover:border-r-gray-light ${
          window.location.href.includes(text.href)
            ? `border-l-2 pl-3 border-l-gray-light border-r-0`
            : `border-r-2`
        }`}
      >
        {text.value}
        {children}
      </Link>
    </li>
  );
};

export default NavbarLi;
