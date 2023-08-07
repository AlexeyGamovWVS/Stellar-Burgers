import Feeds from "../../components/feeds/feeds";
import FeedsSummary from "../../components/feedsSummary/feedsSummary";
import styles from "./feed.module.css";
export function FeedPage() {
  return (
    <main>
      <section className={styles.main}>
        <Feeds />
        <FeedsSummary />
      </section>
    </main>
  );
}
