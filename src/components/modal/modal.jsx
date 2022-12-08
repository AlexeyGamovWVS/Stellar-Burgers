import ReactDOM from "react-dom";
import { useEffect } from "react";
import modalStyles from "./modal.module.css";
import ModalOverlay from "./modalOverlay/modalOverlay";
import PropTypes from "prop-types";
import ModalHeader from "./modalHeader/modal-header";
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

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  header: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
