import { NavLink, useLocation } from "react-router-dom";
import styles from "./asideNavigation.module.css";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../services/actions/profile";

export function AsideNavigation() {
  const dispatch = useDispatch();
  const location = useLocation();
  const logout = () => {
    dispatch(logoutUser());
  };

  const setLinkStyle = (url) =>
    location.pathname === url
      ? `${styles.link} text text_type_main-medium ${styles.link_active}`
      : `${styles.link} text text_type_main-medium`;

  return (
    <aside className={styles.navbar}>
      <nav>
        <ul className={`${styles.links}`}>
          <li className={styles.links__item}>
            <NavLink className={setLinkStyle("/profile")} to={`/profile`}>
              Профиль
            </NavLink>
          </li>
          <li className={`${styles.links__item} text text_type_main-medium`}>
            <NavLink className={setLinkStyle("/profile/orders")} to={"/profile/orders"}>
              История заказов
            </NavLink>
          </li>
          <li className={styles.links__item}>
            <NavLink className={`${styles.link} text text_type_main-medium`} onClick={logout}>
              Выход
            </NavLink>
          </li>
        </ul>
        <p className={`mt-20 text text_type_main-default text_color_inactive`}>
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </nav>
    </aside>
  );
}
