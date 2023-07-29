import style from './Nav.module.sass';
import logo from './../../../assets/logo.png';
import Menu from './menu/Menu';
import Basket from './basket/Basket';
import Button from './Button/Button';
import { useState } from 'react';
const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav>
      <div className={style.nav}>
        <div className={style.logo}>
          <img src={logo} alt="" />
        </div>
        <Menu />
        <div className={style.nav__end}>
          <Basket />
          <Button />
          <div className={style.hamburger} onClick={() => setOpenMenu(!openMenu)}>
            <svg
              width="29"
              height="22"
              viewBox="0 0 29 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <rect width="29" height="2" fill="white" />
              <rect width="29" height="2" fill="white" />
              <rect width="29" height="2" fill="white" />
              <rect width="29" height="2" fill="white" />
              <rect y="10" width="29" height="2" fill="white" />
              <rect y="10" width="29" height="2" fill="white" />
              <rect y="10" width="29" height="2" fill="white" />
              <rect y="10" width="29" height="2" fill="white" />
              <rect y="20" width="29" height="2" fill="white" />
              <rect y="20" width="29" height="2" fill="white" />
              <rect y="20" width="29" height="2" fill="white" />
              <rect y="20" width="29" height="2" fill="white" />
            </svg>
          </div>
        </div>
      </div>

      <div className={style.mobileMenu + ' ' + (openMenu ? style.mobileMenu_open : '')}>
        <div className={style.close} onClick={() => setOpenMenu(!openMenu)}>
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect
              x="0.0761719"
              y="24.0896"
              width="34"
              height="2"
              transform="rotate(-44 0.0761719 24.0896)"
              fill="white"
            />
            <rect
              x="1.46558"
              y="0.471191"
              width="34"
              height="2"
              transform="rotate(44 1.46558 0.471191)"
              fill="white"
            />
          </svg>
        </div>
        <Menu />
        <Button />
      </div>
    </nav>
  );
};
export default Nav;
