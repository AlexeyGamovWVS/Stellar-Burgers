import styles from "./profile.module.css";
import { UserForm } from "../../components/userForm/userForm";
import { AsideNavigation } from "../../components/asideNavigation/asideNavigation";
import { ProtectedRouteElement } from "../../components/protectedRoute/protectdRoute";

export function ProfilePage() {
  return (
    <ProtectedRouteElement>
      <main className={styles.main}>
        <AsideNavigation />
        <div className={styles.content}>
          <UserForm />
        </div>
      </main>
    </ProtectedRouteElement>
  );
}
