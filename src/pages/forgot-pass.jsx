import styles from "./login.module.css";
import { useRef, useState } from "react";
import {
  Button,
  EmailInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import AppHeader from "../components/header/header";
import { Link } from "react-router-dom";

export function ForgotPage() {
  const [emailValue, setEmailValue] = useState("");
  const inputEmailRef = useRef(null);

  return (
    <>
      <AppHeader />
      <main className={styles.main}>
        <form className={styles.form}>
          <h1 className="text text_type_main-medium">
            Восстановление пароля
          </h1>
          <EmailInput
            onChange={(e) => setEmailValue(e.target.value)}
            placeholder="Укажите e-mail "
            value={emailValue}
            name={"email"}
            isIcon={false}
            errorText={"Ошибка. Проверьте правильность почты"}
            ref={inputEmailRef}
            extraClass="ml-1"
          />
          <Button htmlType="submit" type="primary" size="medium">
            Войти
          </Button>
        </form>
        <div className={styles.actions}>
          <p className="text text_type_main-default text_color_inactive">
            Вспомнили пароль?&nbsp;
            <Link to="/login" className={styles.actions__link}>
              Войти
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}
