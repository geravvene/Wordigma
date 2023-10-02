import logo from "../../assets/images/site/logo.png";
import Navbar from "./Navbar.jsx";
import { useRef, useState } from "react";
import { useEffect } from "react";
import ClassicBtn from "../Buttons/ClassicBtn";
import { VscThreeBars } from "react-icons/vsc";
import device from "current-device";
import { useLocation } from "react-router-dom";

const refs = [
  { value: `Авторизация`, href: `reg` },
  { value: `Профиль`, href: `acc` },
  { value: `Рекомендации`, href: `rec` },
  { value: `Авторы`, href: `authors` },
];

const HeaderPositionController = (head) => {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      head.current.classList.add(`fixed`);
      $(`main`).css({
        paddingTop: head.current.getBoundingClientRect().height + `px`,
      });
    } else {
      head.current.classList.remove(`fixed`);
      $(`main`).css({
        paddingTop: ``,
      });
    }
  });
};

const Header = () => {
  const {pathname} = useLocation();
  const [isNavActive, setIsNavActive] = useState(false);
  const head = useRef(null);
  useEffect(() => {
    HeaderPositionController(head);
  }, []);
  return (
    <>
      <header
        onMouseLeave={() => setIsNavActive(false)}
        ref={head}
        className={`flexcol w-full z-20`}
      >
        <div className={`bg-gray-dark flex betcenter p-2 pl-3 pr-3`}>
          {device.mobile() ? (
            <div>
              <ClassicBtn
                func={setIsNavActive}
                arg={!isNavActive}
                shadow={`shadow shadow-black`}
                color={isNavActive ? `bg-gray-light` : `bg-gray`}
              >
                <VscThreeBars color="#a9a9a9" />
              </ClassicBtn>
            </div>
          ) : (
            <div
              onMouseEnter={() => setIsNavActive(true)}
              className={`rounded-md p-1.5 ${
                isNavActive ? `bg-gray-light` : `bg-gray hover:bg-gray-light`
              }`}
            >
              <VscThreeBars color="#a9a9a9" />
            </div>
          )}
          <div className={`font-bold`}>
            {refs
              .filter((ref) => pathname.includes(ref.href))
              .map((ref) => (
                <p key={ref.value}>{ref.value}</p>
              ))}
          </div>
          <img alt={`uroboros logo`} className={`w-7`} src={logo} />
        </div>
        <nav>
          <Navbar
            isActive={isNavActive}
            setIsActive={setIsNavActive}
            refs={refs}
            location={pathname}
          />
        </nav>
      </header>
    </>
  );
};
export default Header;
