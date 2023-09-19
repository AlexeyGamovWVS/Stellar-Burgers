import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import styles from "./modal-header.module.css";

interface IModalHeader {
  close: () => void;
  children?: string;
}

export default function ModalHeader({ close, children }: IModalHeader) {
  return (
    <div className={styles.header}>
      {children && <p className={`${styles.title} text text_type_main-large`}>{children}</p>}
      <div className={`${styles.closeBox}`}>
        <CloseIcon type="primary" onClick={close} />
      </div>
    </div>
  );
}