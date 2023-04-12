import styles from "./login.module.css";
import { useEffect, useState } from "react";
import {
  EmailInput,
  Button,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import AppHeader from "../components/header/header";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../services/actions/profile";

export function LoginPage() {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    if (emailValue && passwordValue) {
      dispatch(loginUser(emailValue, passwordValue));
    } else return;
  };

  //test checking starts
  const navigate = useNavigate();
  const { userInfo, accessToken, refreshToken } = useSelector(
    (store) => store.profile
  );
  useEffect(() => {
    if (userInfo) {
      console.log("user: " + userInfo.name + " " + userInfo.email);
      console.log("accessToken: " + accessToken);
      console.log("refreshToken: " + refreshToken);
      navigate("/profile");
    }
  }, [accessToken, navigate, refreshToken, userInfo]);
  //test checking ends

  return (
    <>
      <AppHeader />
      <main className={styles.main}>
        <form onSubmit={onSubmit} className={styles.form}>
          <h1 className="text text_type_main-medium">Вход</h1>
          <EmailInput
            onChange={(e) => setEmailValue(e.target.value)}
            value={emailValue}
            name={"email"}
            isIcon={false}
            errorText={"Ошибка. Проверьте правильность почты"}
          />
          <PasswordInput
            onChange={(e) => setPasswordValue(e.target.value)}
            value={passwordValue}
            name={"password"}
            errorText={"Ошибка. Введите другой пароль"}
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
            <Link
              to="/forgot-password"
              className={styles.actions__link}
            >
              Восстановить пароль
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}
