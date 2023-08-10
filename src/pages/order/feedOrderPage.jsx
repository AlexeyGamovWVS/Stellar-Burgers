import FeedOrderDetails from "../../components/feedOrderDetails/feedOrderDetails";
import styles from "./feedOrderPage.module.css";

export function FeedOrderPage() {
  return (
    <main className={styles.main}>
      <section className={styles.container}>
        <FeedOrderDetails />
      </section>
    </main>
  );
}
