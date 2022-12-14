import PropTypes from "prop-types";
import ingredStyles from "./ingredients.module.css";
import IngredientRow from "./ingredients-row/ingredients-row";
import getIngredientCards from "./ingredients.utils";
import { useContext } from "react";
import { IngredientsContext } from "../../../../services/appContext";

export default function Ingredients({ onOpen }) {
	const data = useContext(IngredientsContext);
  const separatedData = getIngredientCards(data, onOpen);
  return (
    <div className={`${ingredStyles.rowsContainer} mt-10`}>
      <IngredientRow title="Булки">{separatedData.buns}</IngredientRow>
      <IngredientRow title="Соусы">{separatedData.sauces}</IngredientRow>
      <IngredientRow title="Начинки">{separatedData.mains}</IngredientRow>
    </div>
  );
}

Ingredients.propTypes = {
  onOpen: PropTypes.func.isRequired,
};