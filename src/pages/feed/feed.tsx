import { useDispatch } from "react-redux";
import Feeds from "../../components/feeds/feeds";
import FeedsSummary from "../../components/feedsSummary/feedsSummary";
import styles from "./feed.module.css";
import { useEffect } from "react";
import { connect, disconnect } from "../../services/actions/wsActionTypes";
import { WS_LINK } from "../../utils/data";

export function FeedPage() {
  const dispatch = useDispatch();
  useEffect(() => {
		//@ts-ignore
    dispatch(connect(`${WS_LINK}/all`));

    return () => {
			//@ts-ignore
      dispatch(disconnect());
    };
  }, [dispatch]);

  return (
    <main>
      <section className={styles.main}>hello
        <Feeds />
        <FeedsSummary />
      </section>
    </main>
  );
}
