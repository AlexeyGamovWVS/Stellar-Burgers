import styles from "./preloader.module.css";
export function Preloader() {
  return (
    <div className={styles.preloader}>
      <h1 className={`text text_type_main-large`}>Загружаем...</h1>
    </div>
  );
}
