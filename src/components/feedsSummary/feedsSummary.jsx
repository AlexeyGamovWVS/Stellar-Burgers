import styles from "./feedsSummary.module.css";

export default function FeedsSummary() {
  return (
    <div className={`${styles.summary} mt-10`}>
      {/* Заказы */}
      <div className={styles.summary__orders}>
        <div className={styles.orderscol}>
          <p className={`${styles.orderscol__title} text text_type_main-medium`}>Готовы:</p>
          <ul className={styles.orderscol__list}>
            <li className={`${styles.orderscol__num_ready} text_type_digits-default`} key={555}>
              5555555
            </li>
          </ul>
        </div>
        <div className={styles.orderscol}>
          <p className={`${styles.orderscol__title} text text_type_main-medium`}>В работе</p>
          <ul className={styles.orderscol__list}>
            <li className={`${styles.orderscol__num} text_type_digits-default`} key={666}>
              6666666
            </li>
          </ul>
        </div>
      </div>
      {/* Статистика */}
      <div className={styles.summary__statwidget}>
        <p className={`text text_type_main-medium`}>Выполнено за все время:</p>
        <p className={`${styles.statdigits} text text_type_digits-large`}>13 546</p>
      </div>
      <div className={styles.summary__statwidget}>
        <p className={`text text_type_main-medium`}>Выполнено за сегодня:</p>
        <p className={`${styles.statdigits} text text_type_digits-large`}>646</p>
      </div>
    </div>
  );
}
