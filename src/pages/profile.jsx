import styles from "./profile.module.css";
import AppHeader from "../components/header/header";
import { UserForm } from "../components/userForm/userForm";
import { AsideNavigation } from "../components/asideNavigation/asideNavigation";

export function ProfilePage() {
  return (
    <>
      <AppHeader />
      <main className={styles.main}>
        <AsideNavigation />
        <div className={styles.content}>
          <UserForm />
        </div>
      </main>
    </>
  );
}
