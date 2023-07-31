import styles from "./orders.module.css";
import { AsideNavigation } from "../../components/asideNavigation/asideNavigation";
import { OrderHistory } from "../../components/orderHistory/orderHistory";
import { ProtectedRouteElement } from "../../components/protectedRoute/protectdRoute";

export function OrdersPage() {
  return (
    <ProtectedRouteElement>
      <main className={styles.main}>
        <AsideNavigation />
        <div className={styles.content}>
          <OrderHistory />
        </div>
      </main>
    </ProtectedRouteElement>
  );
}
