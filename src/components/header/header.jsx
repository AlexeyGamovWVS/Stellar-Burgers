import {
  Logo,
  BurgerIcon,
  ProfileIcon,
  ListIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./header.module.css";
import { Link, NavLink } from "react-router-dom";

function AppHeader() {
  return (
    <header className={`${styles.header} pt-4 pb-4`}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={`${styles.link} mr-2`}>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? `${styles.link} pt-4 pb-4 pr-5 pl-5 text text_type_main-default ${styles.link_active}`
                  : `${styles.link} pt-4 pb-4 pr-5 pl-5 text text_type_main-default`
              }
              to="/"
            >
              <BurgerIcon type="secondary" />
              <span className={`ml-2 ${styles.linkText}`}>
                Конструктор
              </span>
            </NavLink>
          </li>
          <li className={`${styles.link} mr-2`}>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? `${styles.link} pt-4 pb-4 pr-5 pl-5 text text_type_main-default ${styles.link_active}`
                  : `${styles.link} pt-4 pb-4 pr-5 pl-5 text text_type_main-default`
              }
              to="/profile/orders"
            >
              <ListIcon type="secondary" />
              <span className={`ml-2 ${styles.linkText}`}>
                Лента Заказов
              </span>
            </NavLink>
          </li>
        </ul>
        <Link to="/" className={styles.logo}>
          <Logo />
        </Link>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `${styles.link} pt-4 pb-4 pr-5 pl-5 text text_type_main-default ${styles.link_active}`
              : `${styles.link} pt-4 pb-4 pr-5 pl-5 text text_type_main-default`
          }
          to="/profile"
        >
          <ProfileIcon type="secondary" />
          <span className={`ml-2 ${styles.linkText}`}>
            Личный кабинет
          </span>
        </NavLink>
      </nav>
    </header>
  );
}

export default AppHeader;
