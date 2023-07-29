import style from './Footer.module.sass';
import logo from './../../assets/logo.png';
const Footer = () => {
  return (
    <footer className={style.footer__wrap}>
      <div className={`${style.footer} wrap`}>
        <div className={style.column}>
          <a href="#" className={style.logo}>
            <img src={logo} alt="" />
          </a>
          <div className={style.description}>
            Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl nunc quam ac sed turpis
            volutpat. Cursus sed massa non .
          </div>
        </div>
        <div className={style.column}>
          <div href="#" className={style.title}>
            Menu Items
          </div>
          <a href="#" className={style.item}>
            About
          </a>
          <a href="#" className={style.item}>
            Blog
          </a>
          <a href="#" className={style.item}>
            Shop
          </a>
          <a href="#" className={style.item}>
            Contact us
          </a>
        </div>
        <div className={style.column}>
          <div href="#" className={style.title}>
            Other Pages
          </div>
          <a href="#" className={style.item}>
            Styleguide
          </a>
          <a href="#" className={style.item}>
            Changelog
          </a>
          <a href="#" className={style.item}>
            licenses
          </a>
          <a href="#" className={style.item}>
            Team
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
