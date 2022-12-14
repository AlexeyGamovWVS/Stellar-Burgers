import ingredStyles from "./ingredients.module.css";
import IngredientRow from "./ingredients-row/ingredients-row";
import getIngredientCards from "./ingredients.utils";
import { useContext, useState } from "react";
import { IngredientsContext } from "../../../../services/appContext";
import Modal from "../../../modal/modal";
import IngredientDetails from "../../../modal/ingredientDetails/ingredientDetails";

export default function Ingredients() {
	const data = useContext(IngredientsContext);
	const openIngredientPop = (e) => setCurrentIngredient(e.currentTarget.id);
  const closeIngredientPop = () => setCurrentIngredient(null);
	const [currentIngredient, setCurrentIngredient] = useState(null);
	const separatedData = getIngredientCards(data, openIngredientPop);
  return (
    <div className={`${ingredStyles.rowsContainer} mt-10`}>
      <IngredientRow title="Булки">{separatedData.buns}</IngredientRow>
      <IngredientRow title="Соусы">{separatedData.sauces}</IngredientRow>
      <IngredientRow title="Начинки">{separatedData.mains}</IngredientRow>
			{currentIngredient && (
        <Modal header="Детали ингредиента" onClose={closeIngredientPop}>
          <IngredientDetails id={currentIngredient} />
        </Modal>
      )}
    </div>
  );
}
