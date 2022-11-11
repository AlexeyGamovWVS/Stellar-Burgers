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
              <NavLink className={`${headerStyles.link__item} pt-4 pb-4 pr-5 pl-5 text text_type_main-default`}>
                <BurgerIcon type="secondary"/>
                <span className="ml-2">Конструктор</span>
              </NavLink>
            </li>
            <li className={`${headerStyles.link} mr-2`}>
						<NavLink className={`${headerStyles.link__item} pt-4 pb-4 pr-5 pl-5 text text_type_main-default`}>
                <ListIcon type="secondary" />
								<span className="ml-2">Лента Заказов</span>
              </NavLink>
            </li>
          </ul>
					<a href="/">
						<Logo />
					</a>
          <NavLink className={`${headerStyles.link__item} pt-4 pb-4 pr-5 pl-5 text text_type_main-default`}>
            <ProfileIcon type="secondary" />
						<span className="ml-2">Личный кабинет</span>
          </NavLink>
        </nav>
      </header>
    );
  }
}

export default AppHeader;
