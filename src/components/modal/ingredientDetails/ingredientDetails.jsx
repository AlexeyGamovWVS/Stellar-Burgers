import styles from "./ingredient-details.module.css";
import PropTypes from "prop-types";
import { IngredientPropType } from "../../utils/data";
export default function IngredientDetails({ id, data }) {
  const item = data.find((el) => el._id === id);
  return (
    <>
      <div className={styles.figure}>
        <img className={styles.image} src={item.image} alt={item.name} />
      </div>
      <p className="text text_type_main-medium mt-4 mb-8">{item.name}</p>
      <ul className={`${styles.list} mb-5`}>
        <Substance amount={item.calories}>Калории,ккал</Substance>
        <Substance amount={item.proteins}>Белки, г</Substance>
        <Substance amount={item.fat}>Жиры, г</Substance>
        <Substance amount={item.carbohydrates}>Углеводы, г</Substance>
      </ul>
    </>
  );
}

function Substance({ amount, children }) {
  return (
    <li className={styles.item}>
      <p className="text text_type_main-default text_color_inactive">
        {children}
      </p>
      <p className="text text_type_digits-default text_color_inactive mt-2">
        {amount}
      </p>
    </li>
  );
}

Substance.propTypes = {
  amount: PropTypes.number.isRequired,
  children: PropTypes.string.isRequired,
};
IngredientDetails.propTypes = {
  id: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(IngredientPropType).isRequired,
};
