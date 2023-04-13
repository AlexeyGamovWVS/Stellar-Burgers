import styles from "./login.module.css";
import { useEffect, useState } from "react";
import {
  EmailInput,
  Button,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import AppHeader from "../components/header/header";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo, loginUser } from "../services/actions/profile";

export function LoginPage() {
  const { userInfo } = useSelector((store) => store.profile);
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUserInfo());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isUserInfo = () => {
    return userInfo !== null;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (emailValue && passwordValue) {
      dispatch(loginUser(emailValue, passwordValue));
      navigate("/", { replace: false });
    } else return;
  };

  return isUserInfo() ? (
    <Navigate to={"/"} replace />
  ) : (
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
