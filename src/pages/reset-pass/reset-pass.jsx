import styles from "./reset-pass.module.css";
import { useEffect, useState } from "react";
import { Input, Button, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";

import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo, resetPassword } from "../../services/actions/profile";

export function ResetPage() {
  const { userInfo, forgotPassSuccess } = useSelector((store) => store.profile);
  const [codeValue, setCodeValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfo());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isUserInfo = () => {
    return userInfo !== null;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (passwordValue && codeValue) {
      dispatch(resetPassword(passwordValue, codeValue));
    }
  };

  return isUserInfo() ? (
    <Navigate to={"/"} replace />
  ) : !forgotPassSuccess ? (
    <Navigate to={"/forgot-password"} replace />
  ) : (
    <main className={styles.main}>
      <form onSubmit={onSubmit} className={styles.form}>
        <h1 className="text text_type_main-medium">Восстановление пароля</h1>
        <PasswordInput
          onChange={(e) => setPasswordValue(e.target.value)}
          placeholder={"Введите новый пароль"}
          value={passwordValue}
          name={"password"}
          errorText={"Ошибка. Введите другой пароль"}
        />
        <Input
          type={"text"}
          placeholder={"Введите код из письма"}
          onChange={(e) => setCodeValue(e.target.value)}
          value={codeValue}
          name={"code"}
          errorText={"Ошибка. код введен неверно"}
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
  );
}
