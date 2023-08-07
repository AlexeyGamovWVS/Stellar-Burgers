import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import styles from "./modal-header.module.css";
import PropTypes from "prop-types";

export default function ModalHeader({ close, children }) {
  return (
    <div className={styles.header}>
      {children && <p className={`${styles.title} text text_type_main-large`}>{children}</p>}
      <div className={`${styles.closeBox}`}>
        <CloseIcon type="primary" onClick={close} />
      </div>
    </div>
  );
}

ModalHeader.propTypes = {
  close: PropTypes.func.isRequired,
  children: PropTypes.string,
};
