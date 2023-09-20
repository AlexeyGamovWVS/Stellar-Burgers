import styles from "./userForm.module.css";
import { useEffect, useRef, useState } from "react";
import { Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { changeUserInfo } from "../../services/actions/profile";
import { useAppDispatch, useAppSelector } from "../..";
import { useForm } from "../../utils/userForm";

export function UserForm() {
  const userInfo = useAppSelector((store) => store.profile.userInfo);
  const { values, handleChange, setValues } = useForm({ name: "", email: "", password: "" });
  const dispatch = useAppDispatch();

  const [nameFieldState, setNameFieldState] = useState(true);
  const [emailFieldState, setEmailFieldState] = useState(true);
  const [passFieldState, setPassFieldState] = useState(true);

  const [isProfileEditing, setProfileEditing] = useState(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    userInfo && setValues(userInfo);
  }, [userInfo, setValues]);

  const onNameEditIconClick = (e: React.MouseEvent) => {
    setProfileEditing(true);
    setNameFieldState(false);
    setTimeout(() => nameRef.current && nameRef.current.focus(), 0);
    setEmailFieldState(true);
    setPassFieldState(true);
  };

  const onEmailIconClick = (e: React.MouseEvent) => {
    setProfileEditing(true);
    setEmailFieldState(false);
    setTimeout(() => emailRef.current && emailRef.current.focus(), 0);
    setNameFieldState(true);
    setPassFieldState(true);
  };

  const onPassIconClick = (e: React.MouseEvent) => {
    setProfileEditing(true);
    setPassFieldState(false);
    setTimeout(() => passRef.current && passRef.current.focus(), 0);
    setNameFieldState(true);
    setEmailFieldState(true);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    values && dispatch(changeUserInfo(values.name!, values.email!, values.password!));
    stopEditoring();
  };

  const cancelEdit = () => {
    stopEditoring();
  };

  const stopEditoring = () => {
    setValues(userInfo!);
    setProfileEditing(false);
    setPassFieldState(true);
    setNameFieldState(true);
    setEmailFieldState(true);
  };

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <Input
        type={"text"}
        placeholder={"Имя"}
        onChange={handleChange}
        value={values.name || ''}
        error={false}
        name={"name"}
        errorText={"Ошибка. Проверьте корректность ввода имени"}
        icon={"EditIcon"}
        onIconClick={onNameEditIconClick}
        ref={nameRef}
        disabled={nameFieldState}
      />
      <Input
        onChange={handleChange}
        value={values.email || ''}
        name={"email"}
        errorText={"Ошибка. проверьте правильность почты"}
        placeholder={"Логин"}
        icon={"EditIcon"}
        onIconClick={onEmailIconClick}
        ref={emailRef}
        disabled={emailFieldState}
      />
      <Input
        type="password"
        onChange={handleChange}
        value={values.password || ''}
        name={"password"}
        errorText={"Ошибка. Введите другой пароль"}
        icon={"EditIcon"}
        placeholder={"Пароль"}
        ref={passRef}
        onIconClick={onPassIconClick}
        disabled={passFieldState}
      />
      {isProfileEditing && (
        <div className={styles.handlers}>
          <Button htmlType="button" type="secondary" size="medium" onClick={cancelEdit}>
            Отмена
          </Button>
          <Button htmlType="submit" type="primary" size="medium">
            Сохранить
          </Button>
        </div>
      )}
    </form>
  );
}
