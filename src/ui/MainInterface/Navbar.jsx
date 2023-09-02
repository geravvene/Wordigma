import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import NavbarLi from "./NavbarLi";

const Navbar = ({ isActive, setIsActive, refs }) => {
  const { user } = useAuth();
  return (
    <>
      <div
        className={isActive ? `nav_menu active` : `nav_menu`}
        onClick={() => {
          setIsActive(false);
        }}
      >
        <ul className={`p-3 text-left`}>
          <div className={`border-t-2 border-gray-light`}>
            <NavbarLi
              key={refs[0].id}
              text={refs[0]}
              src={
                user.img ? (
                  <img
                    alt={`acc_icon`}
                    className={`rounded-md w-5 h-5 ml-3`}
                    src={user.img}
                  />
                ) : (
                  ``
                )
              }
            />
            {refs.slice(2).map((ref) => (
              <NavbarLi key={ref.id} text={ref} />
            ))}
          </div>
        </ul>
      </div>
    </>
  );
};
export default Navbar;
