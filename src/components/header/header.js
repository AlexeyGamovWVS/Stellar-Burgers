import {
  Logo,
  BurgerIcon,
  ProfileIcon,
  ListIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import NavLink from "./nav-link/nav-link";
import headerStyles from "./header.module.css";

function AppHeader() {
  return (
    <header className={`${headerStyles.header} pt-4 pb-4`}>
      <nav className={headerStyles.nav}>
        <ul className={headerStyles.list}>
          <li className={`${headerStyles.link} mr-2`}>
            <NavLink
              icon={<BurgerIcon type="primary" color="text-color-active" />}
            >
              Конструктор
            </NavLink>
          </li>
          <li className={`${headerStyles.link} mr-2`}>
            <NavLink
              icon={<ListIcon type="secondary" />}
              color="text_color_inactive"
            >
              Лента Заказов
            </NavLink>
          </li>
        </ul>
        <a href="/" className={headerStyles.logo}>
          <Logo />
        </a>
        <NavLink
          icon={<ProfileIcon type="secondary" />}
          color="text_color_inactive"
        >
          Личный кабинет
        </NavLink>
      </nav>
    </header>
  );
}

export default AppHeader;
