import ReactDOM from "react-dom";
import { useEffect } from "react";
import modalStyles from "./modal.module.css";
import ModalOverlay from "./modalOverlay/modalOverlay";
import ModalHeader from "./modalHeader/modal-header";
const modalRoot = document.getElementById("modalRoot") as Element;

interface IModal {
  children: JSX.Element;
  header?: string;
  onClose: () => void;
}

function Modal({ children, header, onClose }: IModal) {
  useEffect(() => {
    const escapeClose = (e: KeyboardEvent): void => {
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

export default Modal;
