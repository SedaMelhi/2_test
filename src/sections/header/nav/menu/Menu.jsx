import style from './Menu.module.sass';
const Menu = () => {
  const menuItems = [
    {
      text: 'Home',
      link: '#header',
    },
    {
      text: 'About',
      link: '#about',
    },
    {
      text: 'Team',
      link: '#team',
    },
    {
      text: 'Shop',
      link: '#shop',
    },
    {
      text: 'Pages',
      link: '#pages',
    },
  ];
  return (
    <ul className={style.menu}>
      {menuItems.map(({ text, link }, id) => (
        <li className={style.menu__item} key={id}>
          <a href={link}>{text}</a>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
