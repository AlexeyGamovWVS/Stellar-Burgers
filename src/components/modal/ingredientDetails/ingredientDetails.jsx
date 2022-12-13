import styles from "./ingredient-details.module.css";
import PropTypes from "prop-types";
import Substance from "./substance/substance";
import { useContext } from "react";
import { IngredientsContext } from "../../../services/appContext";
export default function IngredientDetails({ id }) {
	const data = useContext(IngredientsContext)
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

IngredientDetails.propTypes = {
  id: PropTypes.string.isRequired,
};
