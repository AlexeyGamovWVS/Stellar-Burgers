import { useParams } from "react-router-dom";
import styles from "./ingredient-details.module.css";
import Substance from "./substance/substance";
import { useAppSelector } from "../..";
export default function IngredientDetails() {
  const { id } = useParams();
  const items = useAppSelector((store) => store.allItems.items);
  const selectedIngredient = items.find((item) => item._id === id);
  return selectedIngredient ? (
    <>
      <div className={styles.figure}>
        <img
          className={styles.image}
          src={selectedIngredient.image}
          alt={selectedIngredient.name}
        />
      </div>
      <p className="text text_type_main-medium mt-4 mb-8">{selectedIngredient.name}</p>
      <ul className={`${styles.list} mb-5`}>
        <Substance amount={selectedIngredient.calories}>Калории,ккал</Substance>
        <Substance amount={selectedIngredient.proteins}>Белки, г</Substance>
        <Substance amount={selectedIngredient.fat}>Жиры, г</Substance>
        <Substance amount={selectedIngredient.carbohydrates}>Углеводы, г</Substance>
      </ul>
    </>
  ) : (
    <>
      <p className="text text_type_main-medium mt-8 mb-8">Ингредиент не был найден</p>
      <p className="text text_type_digits-large">:&#10098;</p>
    </>
  );
}
