import ReactDOM from "react-dom";
import { useEffect } from "react";
import modalStyles from "./modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import ModalOverlay from "./modalOverlay/modalOverlay";

const modalRoot = document.getElementById("modalRoot");

function Modal({ children, header, onClose }) {
  useEffect(() => {
    const escapeClose = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", escapeClose);
    return () => {
      document.removeEventListener("keydown", escapeClose);
    };
  }, [onClose]);
	
  return ReactDOM.createPortal(
    <>
      <div className={`${modalStyles.modal} p-10`}>
        <ModalHeader close={onClose}>{header}</ModalHeader>
        {children}
      </div>
      <ModalOverlay close={onClose} />
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
