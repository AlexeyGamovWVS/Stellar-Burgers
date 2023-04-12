import ingredStyles from "./ingredients.module.css";
import IngredientRow from "./ingredients-row/ingredients-row";
import { getIngredientCards, currentRow } from "./ingredients.utils";
import Modal from "../../modal/modal";
import IngredientDetails from "../../ingredientDetails/ingredientDetails";
import { useDispatch, useSelector } from "react-redux";
import {
  REMOVE_SELECTED_INGREDIENT,
  SET_SELECTED_INGREDIENT,
} from "../../../services/actions/currentItem";
import { COMPONENT_TYPES } from "../../../utils/data";
import PropTypes from "prop-types";

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
  const { selectedIngredient } = useSelector(
    (store) => store.currentWatchItem
  );

  const openIngredientPop = (e) => {
    dispatch({
      type: SET_SELECTED_INGREDIENT,
      ingredientData: findElement(e.currentTarget, items),
    });
  };

  const closeIngredientPop = () => {
    dispatch({
      type: REMOVE_SELECTED_INGREDIENT,
    });
  };

  const separatedData = getIngredientCards(items, openIngredientPop);

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
      {selectedIngredient && (
        <Modal
          header="Детали ингредиента"
          onClose={closeIngredientPop}
        >
          <IngredientDetails />
        </Modal>
      )}
    </div>
  );
}

Ingredients.propTypes = {
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired,
  rowsRefObj: PropTypes.object.isRequired,
};
