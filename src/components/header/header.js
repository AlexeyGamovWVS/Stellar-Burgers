import React from "react";
import {
  Logo,
  BurgerIcon,
  ProfileIcon,
  ListIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import headerStyles from "./header.module.css";

class AppHeader extends React.Component {
  render() {
    return (
      <header className={`${headerStyles.header} pt-4 pb-4`}>
        <nav className={headerStyles.nav}>
          <ul className={headerStyles.list}>
            <li className={`${headerStyles.link} mr-2`}>
              <NavLink
                icon={<BurgerIcon type="secondary" />}
                className={`${headerStyles.link__item} pt-4 pb-4 pr-5 pl-5 text text_type_main-default text_color_inactive`}
              >
                Конструктор
              </NavLink>
            </li>
            <li className={`${headerStyles.link} mr-2`}>
              <NavLink
                icon={<ListIcon type="secondary" />}
                className={`${headerStyles.link__item} pt-4 pb-4 pr-5 pl-5 text text_type_main-default text_color_inactive`}
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
            className={`${headerStyles.link__item} pt-4 pb-4 pr-5 pl-5 text text_type_main-default text_color_inactive`}
          >
            Личный кабинет
          </NavLink>
        </nav>
      </header>
    );
  }
}

function NavLink(props) {
  return (
    <button className={props.className} type="button">
      {props.icon}
      <span style={{ display: "inline-block" }} className="ml-2">
        {props.children}
      </span>
    </button>
  );
}

export default AppHeader;
