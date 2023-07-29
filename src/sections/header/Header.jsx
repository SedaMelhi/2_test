import Nav from './nav/Nav';
import Content from './content/Content.jsx';

import style from './Header.module.sass';

const Header = () => {
  return (
    <header>
      <Nav />
      <div className={style.header}>
        <div className={style.header__left}>
          <div className={style.networks}>
            <a href="#twitch" className={style.networks__item}>
              TWITCH
            </a>
            <a href="#inst" className={style.networks__item}>
              INSTAGRAM
            </a>
            <a href="#facebook" className={style.networks__item}>
              FACEBOOK
            </a>
          </div>
          <Content />
        </div>
        <div className={style.header__right}>
          <div className={style.header__bg}></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
