import ReactDOM from "react-dom";
import modalStyles from "./modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import ModalOverlay from "./modalOverlay/modalOverlay";

const modalRoot = document.getElementById("modalRoot");

function Modal({ children, header, onClose }) {
  return ReactDOM.createPortal(
    <>
      <div className={`${modalStyles.modal} pl-10 pr-10 pt-10`}>
        <ModalHeader close={onClose}>{header}</ModalHeader>
        {children}
      </div>
      <ModalOverlay />
    </>,
    modalRoot
  );
}

function ModalHeader({ close, children }) {
  return (
    <div className={modalStyles.header}>
      <p className={`${modalStyles.title} text text_type_main-large`}>
        {children}
      </p>
      <div className={`${modalStyles.closeBox}`}>
        <CloseIcon type="primary" onClick={close} />
      </div>
    </div>
  );
}

export default Modal;
