import styles from "./login.module.css";
import { useState } from "react";
import {
  EmailInput,
  Button,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import { loginUser } from "../../services/actions/profile";
import { useAppDispatch, useAppSelector } from "../..";

export function LoginPage() {
  const failed = useAppSelector((store) => store.profile.failed);
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const dispatch = useAppDispatch();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailValue && passwordValue) {
			//@ts-ignore
      dispatch(loginUser({ email: emailValue, password: passwordValue, endpoint: "login" }));
    } else return;
  };

  return (
    <main className={styles.main}>
      <form onSubmit={onSubmit} className={styles.form}>
        <h1 className="text text_type_main-medium">Вход</h1>
        <EmailInput
          onChange={(e) => setEmailValue(e.target.value)}
          value={emailValue}
          name={"email"}
          isIcon={false}
          // errorText={"Ошибка. Проверьте правильность почты"}
        />
        <PasswordInput
          onChange={(e) => setPasswordValue(e.target.value)}
          value={passwordValue}
          name={"password"}
          // errorText={"Ошибка. Введите другой пароль"}
        />
        {failed && (
          <p className="text text_type_main-default" style={{ color: "red" }}>
            Ошибка входа. Проверьте логин или пароль.
          </p>
        )}
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
  );
}
