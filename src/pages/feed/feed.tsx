import Feeds from "../../components/feeds/feeds";
import FeedsSummary from "../../components/feedsSummary/feedsSummary";
import styles from "./feed.module.css";
import { useEffect } from "react";
import { connect, disconnect } from "../../services/actions/wsActionTypes";
import { WS_LINK } from "../../utils/data";
import { useAppDispatch } from "../..";

export function FeedPage() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(connect(`${WS_LINK}/all`));

    return () => {
      dispatch(disconnect());
    };
  }, [dispatch]);

  return (
    <main>
      <section className={styles.main}>
        <Feeds />
        <FeedsSummary />
      </section>
    </main>
  );
}
