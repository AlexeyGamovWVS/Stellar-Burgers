import Ingredient from "./ingredient/ingredient";
import { COMPONENT_TYPES } from "../../utils/data";
import { GET_RANDOM } from "../../burger-constructor/burger-components/burger-components.utils";

export const currentRow = (box) => {
  const boxRect = box.getBoundingClientRect();
  const buns = box.querySelector(`#${COMPONENT_TYPES.buns}`);
  const sauces = box.querySelector(`#${COMPONENT_TYPES.sauces}`);
  const mains = box.querySelector(`#${COMPONENT_TYPES.mains}`);
  const rows = [buns, sauces, mains];
  const newRow = rows.find((row) => {
    const rowRect = row.getBoundingClientRect();
    return (
      (rowRect.y - boxRect.y >= -30) & (rowRect.y - boxRect.y < 100)
    );
  });
  return newRow ? newRow.id : null;
};

export function getIngredientCards(data, onOpen) {
  const buns = [],
    mains = [],
    sauces = [];

  data.forEach((element) => {
    const ingredientCard = (
      <Ingredient
        type={element.type}
        key={element._id}
        id={element._id}
        name={element.name}
        image={element.image}
        price={element.price}
        onOpen={onOpen}
        index={element._id + GET_RANDOM()}
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
