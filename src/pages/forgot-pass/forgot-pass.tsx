import styles from "./forgot-pass.module.css";
import { useEffect } from "react";
import { Button, EmailInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useNavigate } from "react-router-dom";
import { sendEmailForgotPassword } from "../../services/actions/profile";
import { useAppSelector, useAppDispatch } from "../..";
import { useForm } from "../../utils/userForm";

export function ForgotPage() {
  const { values, handleChange } = useForm({ email: "" });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  //checking request starts
  const { message, success } = useAppSelector((store) => store.profile);
  useEffect(() => {
    if (message && success) {
      navigate("/reset-password", { replace: true });
    }
  }, [message, success, navigate]);
  //checking request ends

  const handleForSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (values.email) {
      dispatch(sendEmailForgotPassword(values.email));
    } else return;
  };

  return (
    <main className={styles.main}>
      <form className={styles.form} onSubmit={handleForSubmit}>
        <h1 className="text text_type_main-medium">Восстановление пароля</h1>
        <EmailInput
          onChange={handleChange}
          placeholder="Укажите e-mail "
          value={values.email!}
          name={"email"}
          isIcon={false}
          // errorText={"Ошибка. Проверьте правильность почты"}
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
