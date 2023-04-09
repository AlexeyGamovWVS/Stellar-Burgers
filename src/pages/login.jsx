import styles from "./login.module.css";
import { useRef, useState } from "react";
import {
  EmailInput,
  Button,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import AppHeader from "../components/header/header";
import { Link } from "react-router-dom";

export function LoginPage() {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const inputEmailRef = useRef(null);
  const inputPasswordRef = useRef(null);

  return (
    <>
      <AppHeader />
      <main className={styles.main}>
        <form className={styles.form}>
          <h1 className="text text_type_main-medium">Вход</h1>
          <EmailInput
            onChange={(e) => setEmailValue(e.target.value)}
            value={emailValue}
            name={"email"}
            isIcon={false}
            errorText={"Ошибка. Проверьте правильность почты"}
            ref={inputEmailRef}
            extraClass="ml-1"
          />
          <PasswordInput
            onChange={(e) => setPasswordValue(e.target.value)}
            value={passwordValue}
            name={"password"}
            ref={inputPasswordRef}
            errorText={"Ошибка. Введите другой пароль"}
            extraClass="ml-1"
          />
          <Button htmlType="submit" type="primary" size="medium">
            Войти
          </Button>
        </form>
        <div className={styles.actions}>
          <p className="text text_type_main-default text_color_inactive">
            Вы — новый пользователь?&nbsp;
            <Link to="/register" className={styles.actions__link}>
              Зарегистрироваться
            </Link>
          </p>
          <p className="text text_type_main-default text_color_inactive">
            Забыли пароль?&nbsp;
            <Link to="/forgot-password" className={styles.actions__link}>
              Восстановить пароль
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}
