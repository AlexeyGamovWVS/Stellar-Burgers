import Ingredient from "./ingredient/ingredient";
import { COMPONENT_TYPES } from "../../../utils/data";
export default function getIngredientCards(data, onOpen) {
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
      case COMPONENT_TYPES.mains: {
        mains.push(ingredientCard);
        break;
      }
      case COMPONENT_TYPES.buns: {
        buns.push(ingredientCard);
        break;
      }
      case COMPONENT_TYPES.sauces: {
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