import Feeds from "../../components/feeds/feeds";
import styles from "./feed.module.css";
export function FeedPage() {
  return (
    <main>
      <section className={styles.main}>
        <Feeds />
      </section>
    </main>
  );
}
