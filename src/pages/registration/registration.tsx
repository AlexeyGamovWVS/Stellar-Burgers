import styles from "./registration.module.css";
import {
  Input,
  EmailInput,
  Button,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import { loginUser } from "../../services/actions/profile";
import { useAppDispatch } from "../..";
import { useForm } from "../../utils/userForm";

export function RegistrationPage() {
  const { values, handleChange } = useForm({ email: "", name: "", password: "" });
  const dispatch = useAppDispatch();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (values) {
      dispatch(
        loginUser({
          email: values.email,
          name: values.name,
          password: values.password,
          endpoint: "register",
        })
      );
    } else return;
  };

  return (
    <main className={styles.main}>
      <form onSubmit={onSubmit} className={styles.form}>
        <h1 className="text text_type_main-medium">Регистрация</h1>
        <Input
          type={"text"}
          placeholder={"Имя"}
          onChange={handleChange}
          value={values.name!}
          name={"name"}
          errorText={"Ошибка. Введите корректное имя пользователя"}
        />
        <EmailInput
          onChange={handleChange}
          value={values.email!}
          name={"email"}
          isIcon={false}
          // errorText={"Ошибка. проверьте правильность почты"}
        />
        <PasswordInput
          onChange={handleChange}
          value={values.password!}
          name={"password"}
          // errorText={"Ошибка. Введите другой пароль"}
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
  );
}
