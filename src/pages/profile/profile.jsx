import styles from "./profile.module.css";
import { UserForm } from "../../components/userForm/userForm";
import { AsideNavigation } from "../../components/asideNavigation/asideNavigation";

export function ProfilePage() {
  return (
    <main className={styles.main}>
      <AsideNavigation />
      <div className={styles.content}>
        <UserForm />
      </div>
    </main>
  );
}
