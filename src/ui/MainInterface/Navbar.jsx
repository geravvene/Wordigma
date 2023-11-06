import { useSelector } from 'react-redux';
import LiOption from '../LiOption';
import { useNavigate } from 'react-router-dom';
import UlMenu from '../UlMenu';

const Navbar = ({ isActive, setIsActive, refs, location }) => {
  const user = useSelector((state) => state.userReducer);
  const navigate = useNavigate();
  return (
    <>
      <div
        className={isActive ? `nav_menu active` : `nav_menu`}
        onClick={() => {
          setIsActive(false);
        }}
      >
        <UlMenu>
          <LiOption
            key={refs[1].value}
            focus={location.includes(refs[1].href)}
            arg={{ onClick: () => navigate(refs[1].href) }}
          >
            {refs[1].value}
            {user?.img ? (
              <img
                alt={`acc_icon`}
                className={`rounded-md w-5 h-5 ml-3`}
                src={user.img}
              />
            ) : null}
          </LiOption>
          {refs.slice(2).map((ref) => (
            <LiOption
              key={ref.value}
              focus={location.includes(ref.href)}
              arg={{ onClick: () => navigate(ref.href) }}
            >
              {ref.value}
            </LiOption>
          ))}
        </UlMenu>
      </div>
    </>
  );
};
export default Navbar;
