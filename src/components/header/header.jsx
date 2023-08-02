import {
  Logo,
  BurgerIcon,
  ProfileIcon,
  ListIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./header.module.css";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function AppHeader() {
  const location = useLocation();
  const { userInfo } = useSelector((store) => store.profile);

  const setIconType = (url) =>
    location.pathname === url ? "primary" : "secondary";
  const setLinkStyle = (url) =>
    location.pathname === url
      ? `${styles.link} pt-4 pb-4 pr-5 pl-5 text text_type_main-default ${styles.link_active}`
      : `${styles.link} pt-4 pb-4 pr-5 pl-5 text text_type_main-default`;

  return (
    <header className={`${styles.header} pt-4 pb-4`}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={`${styles.link} mr-2`}>
            <NavLink className={setLinkStyle("/")} to="/">
              <BurgerIcon type={setIconType("/")} />
              <span className={`ml-2 ${styles.linkText}`}>
                Конструктор
              </span>
            </NavLink>
          </li>
          <li className={`${styles.link} mr-2`}>
            <NavLink
              className={setLinkStyle("/profile/orders")}
              to="/profile/orders"
            >
              <ListIcon type={setIconType("/profile/orders")} />
              <span className={`ml-2 ${styles.linkText}`}>
                Лента Заказов
              </span>
            </NavLink>
          </li>
        </ul>
        <Link to="/" className={styles.logo}>
          <Logo />
        </Link>
        <NavLink className={setLinkStyle("/profile")} to="/profile">
          <ProfileIcon type={setIconType("/profile")} />
          <span className={`ml-2 ${styles.linkText}`}>
            {userInfo?.name || "Личный кабинет"}
          </span>
        </NavLink>
      </nav>
    </header>
  );
}

export default AppHeader;
