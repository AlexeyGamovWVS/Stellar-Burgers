import PropTypes from "prop-types";
import ingredStyles from "./ingredients.module.css";
import IngredientRow from "./ingredients-row/ingredients-row";
import Ingredient from "./ingredient/ingredient";

export default function Ingredients({ data }) {
  const goodsMaps = getIngredientsMap(data);
  return (
    <div className={`${ingredStyles.rowsContainer} mt-10`}>
      <IngredientRow title="Булки">{goodsMaps.buns}</IngredientRow>
      <IngredientRow title="Соусы">{goodsMaps.sauces}</IngredientRow>
      <IngredientRow title="Начинки">{goodsMaps.mains}</IngredientRow>
    </div>
  );
}

Ingredients.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
      type: PropTypes.string,
      proteins: PropTypes.number,
      fat: PropTypes.number,
      carbohydrates: PropTypes.number,
      calories: PropTypes.number,
      price: PropTypes.number,
      image: PropTypes.string,
      image_mobile: PropTypes.string,
      image_large: PropTypes.string,
      __v: PropTypes.number,
    })
  ).isRequired,
};

function getIngredientsMap(data) {
  const buns = [],
    mains = [],
    sauces = [],
    undefinedType = [];

  data.forEach((element) => {
    const productMap = (
      <Ingredient
        key={element._id}
        name={element.name}
        image={element.image}
        price={element.price}
      />
    );
    switch (element.type) {
      case "main": {
        mains.push(productMap);
        break;
      }
      case "bun": {
        buns.push(productMap);
        break;
      }
      case "sauce": {
        sauces.push(productMap);
        break;
      }
      default: {
        undefinedType.push(element);
      }
    }
  });
  const separatedData = {
    mains: mains,
    buns: buns,
    sauces: sauces,
    undefinedType: undefinedType,
  };
  return separatedData;
}
