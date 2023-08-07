import { useDispatch } from "react-redux";
import Feeds from "../../components/feeds/feeds";
import FeedsSummary from "../../components/feedsSummary/feedsSummary";
import styles from "./feed.module.css";
import { useEffect } from "react";
import { connect } from "../../services/actions/wsActionTypes";
import { WS_LINK } from "../../utils/data";

export function FeedPage() {
  const dispatch = useDispatch();
  // const { status, orders, total, totalToday, connectingErrorMessage } = useSelector(
  //   (store) => store.wsconnection
  // );
  useEffect(() => {
    dispatch(connect(`${WS_LINK}/all`));
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
