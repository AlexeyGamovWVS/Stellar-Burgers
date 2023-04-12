import styles from "./registration.module.css";
import { useEffect, useRef, useState } from "react";
import {
  Input,
  EmailInput,
  Button,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import AppHeader from "../components/header/header";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../services/actions/profile";

export function RegistrationPage() {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const inputNameRef = useRef(null);
  const inputEmailRef = useRef(null);
  const inputPasswordRef = useRef(null);
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    if (nameValue && emailValue && passwordValue) {
      dispatch(registerUser(emailValue, nameValue, passwordValue));
    } else return;
  };

  //test checking
  const { userInfo, accessToken, refreshToken } = useSelector(
    (store) => store.profile
  );
  useEffect(() => {
    console.log("user: " + userInfo);
    console.log("accessToken: " + accessToken);
    console.log("refreshToken: " + refreshToken);
  }, [accessToken, refreshToken, userInfo]);
  return (
    <>
      <AppHeader />
      <main className={styles.main}>
        <form onSubmit={onSubmit} className={styles.form}>
          <h1 className="text text_type_main-medium">Регистрация</h1>
          <Input
            type={"text"}
            placeholder={"Имя"}
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
            Уже зарегситрированы?&nbsp;
            <Link to="/login" className={styles.actions__link}>
              Войти
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}
