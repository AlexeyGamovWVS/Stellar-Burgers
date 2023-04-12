import { NavLink } from "react-router-dom";
import styles from "./profile.module.css";
import AppHeader from "../components/header/header";
import { UserForm } from "../components/userForm/userForm";

export function ProfilePage() {
  return (
    <>
      <AppHeader />
      <main className={styles.main}>
        <aside className={styles.navbar}>
          <nav>
            <ul className={`${styles.links}`}>
              <li className={styles.links__item}>
                <NavLink
                  className={`${styles.link} text text_type_main-medium`}
                  to={`#`}
                >
                  Профиль
                </NavLink>
              </li>
              <li
                className={`${styles.links__item} text text_type_main-medium`}
              >
                <NavLink
                  className={`${styles.link} text text_type_main-medium`}
                  to={`#`}
                >
                  История заказов
                </NavLink>
              </li>
              <li className={styles.links__item}>
                <NavLink
                  className={`${styles.link} text text_type_main-medium`}
                  to="/login"
                >
                  Выход
                </NavLink>
              </li>
            </ul>
            <p
              className={`mt-20 text text_type_main-default text_color_inactive`}
            >
              В этом разделе вы можете изменить свои персональные
              данные
            </p>
          </nav>
        </aside>
        <div className={styles.content}>
          <UserForm />
        </div>
      </main>
    </>
  );
}
