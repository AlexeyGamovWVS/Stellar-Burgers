import ingredStyles from "./ingredients.module.css";
import IngredientRow from "./ingredients-row/ingredients-row";
import { getIngredientCards, currentRow } from "./ingredients.utils";
import { useDispatch, useSelector } from "react-redux";
import {
  SET_SELECTED_INGREDIENT,
} from "../../../services/actions/currentItem";
import { COMPONENT_TYPES } from "../../../utils/data";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

const findElement = (target, items) => {
  return items.find((item) => item._id === target.id);
};

export default function Ingredients({
  activeTab,
  setActiveTab,
  rowsRefObj,
}) {
  const dispatch = useDispatch();
  const { items } = useSelector((store) => store.allItems);
	const location = useLocation();
	const state = location.state;
  const openIngredientPop = (e) => {
    dispatch({
      type: SET_SELECTED_INGREDIENT,
      ingredientData: findElement(e.currentTarget, items),
    });
  };

  const separatedData = getIngredientCards(
    items,
    openIngredientPop,
		state,
		location
  );

  const scrollHandler = (e) => {
    const newRow = currentRow(e.currentTarget);
    newRow && newRow !== activeTab && setActiveTab(newRow);
  };

  return (
    <div
      onScroll={scrollHandler}
      className={`${ingredStyles.rowsContainer} mt-10`}
    >
      <IngredientRow
        rowRef={rowsRefObj.bunsRef}
        id={COMPONENT_TYPES.buns}
        title="Булки"
      >
        {separatedData.buns}
      </IngredientRow>
      <IngredientRow
        rowRef={rowsRefObj.saucesRef}
        id={COMPONENT_TYPES.sauces}
        title="Соусы"
      >
        {separatedData.sauces}
      </IngredientRow>
      <IngredientRow
        rowRef={rowsRefObj.mainsRef}
        id={COMPONENT_TYPES.mains}
        title="Начинки"
      >
        {separatedData.mains}
      </IngredientRow>
    </div>
  );
}

Ingredients.propTypes = {
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired,
  rowsRefObj: PropTypes.object.isRequired,
};
