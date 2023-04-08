import {
  Button,
  EmailInput,
  Input,
	PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useRef, useState } from "react";
import styles from "./registration.module.css";

export default function Registration() {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const inputNameRef = useRef(null);
  const inputEmailRef = useRef(null);
  const inputPasswordRef = useRef(null);

  return (
    <main className={styles.main}>
      <form className={styles.form}>
        <h1 className="text text_type_main-medium">Регистрация</h1>
        <Input
          type={"text"}
          placeholder={"Имя"}
          pattern="[a-zA-Z]"
          onChange={(e) => setNameValue(e.target.value)}
          value={nameValue}
          name={"name"}
          ref={inputNameRef}
          errorText={"Ошибка. Введите корректное имя пользователя"}
          extraClass="ml-1"
        />
        <EmailInput
          onChange={(e) => setEmailValue(e.target.value)}
          value={emailValue}
          name={"email"}
          isIcon={false}
          errorText={"Ошибка. проверьте правильность почты"}
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
          Зарегистрироваться
        </Button>
      </form>
      <div className={styles.actions}>
        <p className="text text_type_main-default text_color_inactive">
          Уже зарегистрированы?&nbsp;
          <a className={styles.actions__link} href="/">
            Войти
          </a>
        </p>
      </div>
    </main>
  );
}
