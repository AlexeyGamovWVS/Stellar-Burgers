import PropTypes from "prop-types";
import ingredStyles from "./ingredients.module.css";
import IngredientRow from "./ingredients-row/ingredients-row";
import Ingredient from "./ingredient/ingredient";
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

function getIngredientCards(data, onOpen) {
  const buns = [],
    mains = [],
    sauces = [];

  data.forEach((element) => {
    const ingredientCard = (
      <Ingredient
        key={element._id}
        opnId={element._id}
        name={element.name}
        image={element.image}
        price={element.price}
        onOpen={onOpen}
      />
    );
    switch (element.type) {
      case "main": {
        mains.push(ingredientCard);
        break;
      }
      case "bun": {
        buns.push(ingredientCard);
        break;
      }
      case "sauce": {
        sauces.push(ingredientCard);
        break;
      }
      default: {
        break;
      }
    }
  });
  const separatedData = {
    mains: mains,
    buns: buns,
    sauces: sauces,
  };
  return separatedData;
}
