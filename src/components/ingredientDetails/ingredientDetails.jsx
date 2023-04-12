import { useParams } from "react-router-dom";
import styles from "./ingredient-details.module.css";
import Substance from "./substance/substance";
import { useSelector } from "react-redux";
export default function IngredientDetails() {
  const { id } = useParams();
  // test id 60d3b41abdacab0026a733c7
  let { selectedIngredient } = useSelector(
    (store) => store.currentWatchItem
  );
  const { items } = useSelector((store) => store.allItems);
  selectedIngredient = id
    ? items.find((item) => item._id === id)
    : selectedIngredient;
  return selectedIngredient ? (
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
        <Substance amount={selectedIngredient.calories}>
          Калории,ккал
        </Substance>
        <Substance amount={selectedIngredient.proteins}>
          Белки, г
        </Substance>
        <Substance amount={selectedIngredient.fat}>Жиры, г</Substance>
        <Substance amount={selectedIngredient.carbohydrates}>
          Углеводы, г
        </Substance>
      </ul>
    </>
  ) : (
    <>
      <p className="text text_type_main-medium mt-8 mb-8">
        Ингредиент не был найден
      </p>
      <p className="text text_type_digits-large">:&#10098;</p>
    </>
  );
}
