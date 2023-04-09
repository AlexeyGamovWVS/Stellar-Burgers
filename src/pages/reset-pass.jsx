import styles from "./reset-pass.module.css";
import { useRef, useState } from "react";
import {
  Input,
  Button,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import AppHeader from "../components/header/header";
import { Link } from "react-router-dom";

export function ResetPage() {
  const [codeValue, setCodeValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const inputCodeRef = useRef(null);
  const inputPasswordRef = useRef(null);

  return (
    <>
      <AppHeader />
      <main className={styles.main}>
        <form className={styles.form}>
          <h1 className="text text_type_main-medium">Восстановление пароля</h1>
          <PasswordInput
            onChange={(e) => setPasswordValue(e.target.value)}
            placeholder={"Введите новый пароль"}
            value={passwordValue}
            name={"password"}
            ref={inputPasswordRef}
            errorText={"Ошибка. Введите другой пароль"}
            extraClass="ml-1"
          />
          <Input
            type={"text"}
            placeholder={"Введите код из письма"}
            onChange={(e) => setCodeValue(e.target.value)}
            value={codeValue}
            name={"code"}
            ref={inputCodeRef}
            errorText={"Ошибка. код введен неверно"}
            extraClass="ml-1"
          />
          <Button htmlType="submit" type="primary" size="medium">
            Сохранить
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
