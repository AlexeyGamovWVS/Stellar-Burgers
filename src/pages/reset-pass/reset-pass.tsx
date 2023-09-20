import styles from "./reset-pass.module.css";
import { Input, Button, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";

import { Link, Navigate } from "react-router-dom";
import { resetPassword } from "../../services/actions/profile";
import { useAppDispatch, useAppSelector } from "../..";
import { useForm } from "../../utils/userForm";

export function ResetPage() {
  const success = useAppSelector((store) => store.profile.success);
  const { values, handleChange } = useForm({ code: "", password: "" });
  const dispatch = useAppDispatch();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (values) {
      dispatch(resetPassword(values.password!, values.code!));
    }
  };

  return !success ? (
    <Navigate to={"/forgot-password"} replace />
  ) : (
    <main className={styles.main}>
      <form onSubmit={onSubmit} className={styles.form}>
        <h1 className="text text_type_main-medium">Восстановление пароля</h1>
        <PasswordInput
          onChange={handleChange}
          placeholder={"Введите новый пароль"}
          value={values.password!}
          name={"password"}
          // errorText={"Ошибка. Введите другой пароль"}
        />
        <Input
          type={"text"}
          placeholder={"Введите код из письма"}
          onChange={handleChange}
          value={values.code!}
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
