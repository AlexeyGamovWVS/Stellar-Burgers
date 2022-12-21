import styles from "./ingredient-details.module.css";
import Substance from "./substance/substance";
import { IngredientPropType } from "../../utils/data";
import { useSelector } from "react-redux";
export default function IngredientDetails() {
	const { selectedIngredient } = useSelector((store) => store.currentWatchItem);
  return (
    <>
      <div className={styles.figure}>
        <img
          className={styles.image}
          src={selectedIngredient.image}
          alt={selectedIngredient.name}
        />
      </div>
      <p className="text text_type_main-medium mt-4 mb-8">
        {selectedIngredient.name}
      </p>
      <ul className={`${styles.list} mb-5`}>
        <Substance amount={selectedIngredient.calories}>Калории,ккал</Substance>
        <Substance amount={selectedIngredient.proteins}>Белки, г</Substance>
        <Substance amount={selectedIngredient.fat}>Жиры, г</Substance>
        <Substance amount={selectedIngredient.carbohydrates}>
          Углеводы, г
        </Substance>
      </ul>
    </>
  );
}

IngredientDetails.propTypes = {
  selectedIngredient: IngredientPropType.isRequired,
};
