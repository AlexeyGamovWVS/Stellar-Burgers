import { NavLink } from "react-router-dom";
import styles from "./asideNavigation.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../services/actions/profile";
import { useEffect } from "react";
import { cleanTokenCookies } from "../../utils/cookie";

export function AsideNavigation() {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(logoutUser());
		cleanTokenCookies(["accessToken", "refreshToken"]);
  };

  //test checking starts
  const { userInfo, accessToken, refreshToken } =
    useSelector((store) => store.profile);
  useEffect(() => {
    if (userInfo) {
      console.log("user: " + userInfo.name + " " + userInfo.email);
      console.log("accessToken: " + accessToken);
      console.log("refreshToken: " + refreshToken);
    }
  }, [accessToken, refreshToken, userInfo]);
  //test checking ends

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
              to="/login"
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
