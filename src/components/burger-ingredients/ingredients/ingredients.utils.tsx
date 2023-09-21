import Ingredient from "./ingredient/ingredient";
import { COMPONENT_TYPES } from "../../../utils/data";
import { Link, Outlet } from "react-router-dom";
import styles from "./ingredients.module.css";
import { IIngredient } from "../../../services/utils/ingredients-types";

export const currentRow = (box: HTMLDivElement) => {
  const boxRect = box.getBoundingClientRect();
  const buns = box.querySelector(`#${COMPONENT_TYPES.buns}`);
  const sauces = box.querySelector(`#${COMPONENT_TYPES.sauces}`);
  const mains = box.querySelector(`#${COMPONENT_TYPES.mains}`);
  const rows = [buns, sauces, mains];
  const newRow = rows.find((row) => {
    const rowRect = row?.getBoundingClientRect();
    return rowRect ? rowRect.y - boxRect.y >= -30 && rowRect.y - boxRect.y < 100 : false;
  });
  return newRow ? newRow.id : null;
};

export function getIngredientCards(data: IIngredient[], state: any, location: any) {
  const buns: JSX.Element[] = [],
    mains: JSX.Element[] = [],
    sauces: JSX.Element[] = [];
  state = { ...state, back: location };

  data.forEach((element) => {
    const ingredientCard = (
      <div key={`ingrediet_${element._id}`}>
        <Link className={styles.link} to={`/ingredients/${element._id}`} state={state}>
          <Ingredient
            type={element.type}
            key={element._id}
            name={element.name}
            image={element.image}
            price={element.price}
            _id={element._id}
          />
        </Link>
        <Outlet />
      </div>
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
