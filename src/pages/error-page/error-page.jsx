import styles from "./error-page.module.css";
import { Link } from "react-router-dom";

export function ErrorPage() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <p className="text text_type_digits-large text_color_inactive">
          404
        </p>
        <h1 className="text text_type_main-large">
          Упс! Такой страницы нет
        </h1>
        <p className="text text_type_main-medium text_color_inactive">
          Возможно мы&nbsp;её&nbsp;удалили или переместили.
          Не&nbsp;расстраивайтесь и&nbsp;порадуте себя самыми
          классными бургерами во&nbsp;вселенной!
        </p>
        <Link
          className={`${styles.link} text text_type_main-default`}
          to="/"
        >
          На главную
        </Link>
      </div>
    </main>
  );
}
