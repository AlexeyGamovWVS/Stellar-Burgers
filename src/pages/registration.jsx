import styles from "./registration.module.css";
import { useEffect, useState } from "react";
import {
  Input,
  EmailInput,
  Button,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import AppHeader from "../components/header/header";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserInfo,
  registerUser,
} from "../services/actions/profile";

export function RegistrationPage() {
  const { userInfo } = useSelector((store) => store.profile);
  const [nameValue, setNameValue] = useState("");
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
    if (nameValue && emailValue && passwordValue) {
      dispatch(registerUser(emailValue, nameValue, passwordValue));
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
