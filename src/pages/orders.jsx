import styles from "./orders.module.css";
import AppHeader from "../components/header/header";
import { AsideNavigation } from "../components/asideNavigation/asideNavigation";
import { OrderHistory } from "../components/orderHistory/orderHistory";

export function OrdersPage() {
  return (
    <>
      <AppHeader />
      <main className={styles.main}>
        <AsideNavigation />
        <div className={styles.content}>
          <OrderHistory />
        </div>
      </main>
    </>
  );
}
