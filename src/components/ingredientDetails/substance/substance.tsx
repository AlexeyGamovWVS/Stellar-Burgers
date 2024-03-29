import styles from "./substance.module.css";
import PropTypes from "prop-types";

interface ISubstance {
  amount: number;
  children: string;
}

export default function Substance({ amount, children }: ISubstance) {
  return (
    <li className={styles.item}>
      <p className="text text_type_main-default text_color_inactive">{children}</p>
      <p className="text text_type_digits-default text_color_inactive mt-2">{amount}</p>
    </li>
  );
}

Substance.propTypes = {
  amount: PropTypes.number.isRequired,
  children: PropTypes.string.isRequired,
};
