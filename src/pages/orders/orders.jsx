import styles from "./orders.module.css";
import { AsideNavigation } from "../../components/asideNavigation/asideNavigation";
import { OrderHistory } from "../../components/orderHistory/orderHistory";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { connect } from "../../services/actions/wsActionTypes";
import { ACCESS_TOKEN, WS_LINK } from "../../utils/data";
import { getCookie } from "../../utils/cookie";

export function OrdersPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = getCookie(ACCESS_TOKEN).split(" ")[1];
    dispatch(connect(`${WS_LINK}?token=${token}`));
  }, [dispatch]);
  return (
    <main className={styles.main}>
      <AsideNavigation />
      <div className={styles.content}>
        <OrderHistory />
      </div>
    </main>
  );
}
