import { useState, useCallback} from 'react';
import { useLocation } from 'react-router-dom';
import { VscThreeBars } from 'react-icons/vsc';

import device from 'current-device';

import ClassicBtn from '@ui/buttons/ClassicBtn';
import logo from '@img/logo.png';
import Navbar from './Navbar';

const refs = [
  { value: `Авторизация`, href: `reg` },
  { value: `Профиль`, href: `acc` },
  { value: `Рекомендации`, href: `rec` },
  { value: `Авторы`, href: `authors` },
];

const Header = () => {
  const { pathname } = useLocation();

  const [isNavActive, setIsNavActive] = useState(false);


  const setStateTrue = useCallback(() => {
    setIsNavActive(true);
  }, []);

  const setStateFalse = useCallback(() => {
    setIsNavActive(false);
  }, []);

  const toggleState = () => setIsNavActive(!isNavActive);
  
  return (
    <>
      <header
        onMouseLeave={setStateFalse}
        className={`flexcol w-full z-20 fixed`}
      >
        <div className={`bg-gray-dark flex betcenter p-2 pl-3 pr-3`}>
          {device.mobile() ? (
            <div>
              <ClassicBtn
                func={toggleState}
                shadow={`shadow shadow-black`}
                color={isNavActive ? `bg-gray-light` : `bg-gray`}
              >
                <VscThreeBars color="#a9a9a9" />
              </ClassicBtn>
            </div>
          ) : (
            <div
              onMouseEnter={setStateTrue}
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
            setClose={setStateFalse}
            refs={refs}
            location={pathname}
          />
        </nav>
      </header>
    </>
  );
};

export default Header;
