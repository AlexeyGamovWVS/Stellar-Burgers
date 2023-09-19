import styles from "./orders.module.css";
import { AsideNavigation } from "../../components/asideNavigation/asideNavigation";
import { OrderHistory } from "../../components/orderHistory/orderHistory";
import { useEffect } from "react";
import { connectPersonal, disconnectPersonal } from "../../services/actions/wsActionTypes";
import { ACCESS_TOKEN, WS_LINK } from "../../utils/data";
import { getCookie } from "../../utils/cookie";
import { useAppDispatch } from "../..";

export function OrdersPage() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const token = getCookie(ACCESS_TOKEN)!.split(" ")[1];
		//@ts-ignore
    dispatch(connectPersonal(`${WS_LINK}?token=${token}`));

    return () => {
			//@ts-ignore
      dispatch(disconnectPersonal());
    };
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
