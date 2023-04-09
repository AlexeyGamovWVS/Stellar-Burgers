import styles from "./login.module.css";
import { useEffect, useRef, useState } from "react";
import {
  Button,
  EmailInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import AppHeader from "../components/header/header";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sendEmailForgotPassword } from "../services/actions/profile";

export function ForgotPage() {
  const [emailValue, setEmailValue] = useState("");
  const inputEmailRef = useRef(null);
  const dispatch = useDispatch();
	
	//checking request starts
  const { forgotPassDetails, forgotPassErrMsg } = useSelector(
    (store) => store.profile
  );
  useEffect(() => {
    console.log(forgotPassDetails);
    console.log(forgotPassErrMsg);
  }, [forgotPassDetails, forgotPassErrMsg]);
	//checking request ends

  const handleForSubmit = (e) => {
    e.preventDefault();
    if (emailValue) {
      dispatch(sendEmailForgotPassword(emailValue));
    } else return;
  };

  return (
    <>
      <AppHeader />
      <main className={styles.main}>
        <form className={styles.form} onSubmit={handleForSubmit}>
          <h1 className="text text_type_main-medium">
            Восстановление пароля
          </h1>
          <EmailInput
            onChange={(e) => setEmailValue(e.target.value)}
            placeholder="Укажите e-mail "
            value={emailValue}
            name={"email"}
            isIcon={false}
            errorText={"Ошибка. Проверьте правильность почты"}
            ref={inputEmailRef}
            extraClass="ml-1"
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
    </>
  );
}
