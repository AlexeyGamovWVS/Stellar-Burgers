import overStyles from "./overlay.module.css";
import PropTypes from "prop-types";

export default function ModalOverlay({close}) {
	return <div className={overStyles.overlay} onClick={close}></div>;
}

ModalOverlay.propTypes = {
	close: PropTypes.func.isRequired,
}