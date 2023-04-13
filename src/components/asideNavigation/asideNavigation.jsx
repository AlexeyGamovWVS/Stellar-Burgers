import { NavLink, useNavigate } from "react-router-dom";
import styles from "./asideNavigation.module.css";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../services/actions/profile";
import { cleanTokenCookies } from "../../utils/cookie";

export function AsideNavigation() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    dispatch(logoutUser());
    cleanTokenCookies(["accessToken", "refreshToken"]);
    navigate("/login", { replace: true });
  };

  return (
    <aside className={styles.navbar}>
      <nav>
        <ul className={`${styles.links}`}>
          <li className={styles.links__item}>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? `${styles.link} text text_type_main-medium ${styles.link_active}`
                  : `${styles.link} text text_type_main-medium`
              }
              to={`/profile`}
            >
              Профиль
            </NavLink>
          </li>
          <li
            className={`${styles.links__item} text text_type_main-medium`}
          >
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? `${styles.link} text text_type_main-medium ${styles.link_active}`
                  : `${styles.link} text text_type_main-medium`
              }
              to={"/profile/orders"}
            >
              История заказов
            </NavLink>
          </li>
          <li className={styles.links__item}>
            <NavLink
              className={`${styles.link} text text_type_main-medium`}
              onClick={logout}
            >
              Выход
            </NavLink>
          </li>
        </ul>
        <p
          className={`mt-20 text text_type_main-default text_color_inactive`}
        >
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </nav>
    </aside>
  );
}
