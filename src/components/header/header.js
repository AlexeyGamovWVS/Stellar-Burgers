import React from "react";
import {
  Logo,
  BurgerIcon,
  ProfileIcon,
  ListIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import headerStyles from "./header.module.css";
import NavLink from "./nav-link/nav-link";

class AppHeader extends React.Component {
  render() {
    return (
      <header className={`${headerStyles.header} pt-4 pb-4`}>
        <nav className={headerStyles.nav}>
          <ul className={headerStyles.list}>
            <li className={`${headerStyles.link} mr-2`}>
              <NavLink
                icon={<BurgerIcon type="secondary" />}
                className={`${headerStyles.link__item} pt-4 pb-4 pr-5 pl-5 text text_type_main-default`}
              >
                Конструктор
              </NavLink>
            </li>
            <li className={`${headerStyles.link} mr-2`}>
              <NavLink
                icon={<ListIcon type="secondary" />}
                className={`${headerStyles.link__item} pt-4 pb-4 pr-5 pl-5 text text_type_main-default`}
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
            className={`${headerStyles.link__item} pt-4 pb-4 pr-5 pl-5 text text_type_main-default`}
          >
            Личный кабинет
          </NavLink>
        </nav>
      </header>
    );
  }
}

export default AppHeader;
