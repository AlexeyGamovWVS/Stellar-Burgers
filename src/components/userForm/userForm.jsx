import { useSelector } from "react-redux";
import styles from "./userForm.module.css";
import { useRef, useState } from "react";
import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";

export function UserForm() {
  const { userInfo } = useSelector((store) => store.profile);

  const { nameValue, setNameValue } = useState("name");
  const { emailValue, setEmailValue } = useState("");
  const { passwordValue, setPasswordValue } = useState("");
  const { isProfileEditing, setProfileEditing } = useState(false);
  const nameRef = useRef();
  // useEffect(() => {
  // 	isProfileEditing ? nameRef
  // })
  const onNameEditIconClick = (e) => {
    nameRef.disabled = false;
    setProfileEditing(true);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("form enabled");
  };

  const cancelEdit = () => {
    console.log("edit canceled");
  };

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <Input
        type={"text"}
        placeholder={"Имя"}
        onChange={(e) => setNameValue(e.target.value)}
        value={nameValue}
        name={"name"}
        errorText={"Ошибка. Проверьте корректность ввода имени"}
        isIcon={true}
        icon={"EditIcon"}
        onIconClick={onNameEditIconClick}
        ref={nameRef}
        disabled
      />
      <EmailInput
        onChange={(e) => setEmailValue(e.target.value)}
        value={emailValue}
        name={"email"}
        isIcon={true}
        errorText={"Ошибка. проверьте правильность почты"}
        placeholder={"Логин"}
      />
      <PasswordInput
        onChange={(e) => setPasswordValue(e.target.value)}
        value={passwordValue}
        name={"password"}
        errorText={"Ошибка. Введите другой пароль"}
        icon={"EditIcon"}
      />
      <div className={styles.handlers}>
        <Button
          htmlType="button"
          type="secondary"
          size="medium"
          onClick={cancelEdit}
        >
          Отмена
        </Button>
        <Button htmlType="submit" type="primary" size="medium">
          Сохранить
        </Button>
      </div>
    </form>
  );
}
