import styles from "./login.module.css";
import {
  EmailInput,
  Button,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import { loginUser } from "../../services/actions/profile";
import { useAppDispatch, useAppSelector } from "../..";
import { useForm } from "../../utils/userForm";

export function LoginPage() {
  const failed = useAppSelector((store) => store.profile.failed);
  const { values, handleChange } = useForm({ email: "", password: "" });
  const dispatch = useAppDispatch();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (values) {
      dispatch(
        loginUser({
          email: values.email,
          password: values.password,
          endpoint: "login",
          name: undefined,
        })
      );
    } else return;
  };

  return (
    <main className={styles.main}>
      <form onSubmit={onSubmit} className={styles.form}>
        <h1 className="text text_type_main-medium">Вход</h1>
        <EmailInput
          onChange={handleChange}
          value={values.email!}
          name={"email"}
          isIcon={false}
          // errorText={"Ошибка. Проверьте правильность почты"}
        />
        <PasswordInput
          onChange={handleChange}
          value={values.password!}
          name={"password"}
          // errorText={"Ошибка. Введите другой пароль"}
        />
        {failed && (
          <p className="text text_type_main-default" style={{ color: "red" }}>
            Ошибка входа. Проверьте логин или пароль.
          </p>
        )}
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
          <Link to="/forgot-password" className={styles.actions__link}>
            Восстановить пароль
          </Link>
        </p>
      </div>
    </main>
  );
}
