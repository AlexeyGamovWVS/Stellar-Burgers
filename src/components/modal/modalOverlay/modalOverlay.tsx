import overStyles from "./overlay.module.css";

interface IModalOverlay {
  close: () => void;
}

export default function ModalOverlay({ close }: IModalOverlay) {
  return <div className={overStyles.overlay} onClick={close}></div>;
}
