import styles from "./registration.module.css";
import { useEffect, useState } from "react";
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
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    if (nameValue && emailValue && passwordValue) {
      dispatch(registerUser(emailValue, nameValue, passwordValue));
    } else return;
  };

  //test checking starts
  const { userInfo, accessToken, refreshToken } = useSelector(
    (store) => store.profile
  );
  useEffect(() => {
		if (userInfo) {
			console.log("user: " + userInfo.email + userInfo.name);
			console.log("accessToken: " + accessToken);
			console.log("refreshToken: " + refreshToken);
		}
  }, [accessToken, refreshToken, userInfo]);
	//test checking ends

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
            errorText={"Ошибка. Введите корректное имя пользователя"}
          />
          <EmailInput
            onChange={(e) => setEmailValue(e.target.value)}
            value={emailValue}
            name={"email"}
            isIcon={false}
            errorText={"Ошибка. проверьте правильность почты"}
          />
          <PasswordInput
            onChange={(e) => setPasswordValue(e.target.value)}
            value={passwordValue}
            name={"password"}
            errorText={"Ошибка. Введите другой пароль"}
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
