import styles from "./forgot-pass.module.css";
import { useEffect, useState } from "react";
import { Button, EmailInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo, sendEmailForgotPassword } from "../../services/actions/profile";

export function ForgotPage() {
  const { userInfo } = useSelector((store) => store.profile);
  const [emailValue, setEmailValue] = useState("");
  const dispatch = useDispatch();

  //для временной навигации старт
  const navigate = useNavigate();
  //для временной навигации конец

  useEffect(() => {
    dispatch(getUserInfo());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isUserInfo = () => {
    return userInfo !== null;
  };

  //checking request starts
  const { forgotPassMessage, forgotPassSuccess } = useSelector((store) => store.profile);
  useEffect(() => {
    console.log(forgotPassMessage);
    if (forgotPassMessage && forgotPassSuccess) {
      navigate("/reset-password", { replace: true }); // временная навигация, вероятно неверно, см следующий спринт
    }
  }, [forgotPassMessage, forgotPassSuccess, navigate]);
  //checking request ends

  const handleForSubmit = (e) => {
    e.preventDefault();
    if (emailValue) {
      dispatch(sendEmailForgotPassword(emailValue));
    } else return;
  };

  return isUserInfo() ? (
    <Navigate to={"/"} replace />
  ) : (
    <main className={styles.main}>
      <form className={styles.form} onSubmit={handleForSubmit}>
        <h1 className="text text_type_main-medium">Восстановление пароля</h1>
        <EmailInput
          onChange={(e) => setEmailValue(e.target.value)}
          placeholder="Укажите e-mail "
          value={emailValue}
          name={"email"}
          isIcon={false}
          errorText={"Ошибка. Проверьте правильность почты"}
        />
        <Button htmlType="submit" type="primary" size="medium">
          Восстановить
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
