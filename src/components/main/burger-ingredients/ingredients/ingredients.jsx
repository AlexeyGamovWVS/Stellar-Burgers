import ingredStyles from "./ingredients.module.css";
import IngredientRow from "./ingredients-row/ingredients-row";
import getIngredientCards from "./ingredients.utils";
import Modal from "../../../modal/modal";
import IngredientDetails from "../../../modal/ingredientDetails/ingredientDetails";
import { useDispatch, useSelector } from "react-redux";
import {
  REMOVE_SELECTED_INGREDIENT,
  SET_SELECTED_INGREDIENT,
} from "../../../../services/actions/currentItem";
import { ADD_ITEM_TO_CHOICE } from "../../../../services/actions/chosenIngredients";
import { COMPONENT_TYPES } from "../../../utils/data";
const findElement = (target, items) => {
  return items.find((item) => item._id === target.id);
};

export default function Ingredients() {
  const dispatch = useDispatch();
  const { items } = useSelector((store) => store.allItems);
  const { selectedIngredient } = useSelector((store) => store.currentWatchItem);
  const { bunIsSelected } = useSelector((store) => store.selectedItems);

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

  const addToChoice = (e) => {
    const target = findElement(e.currentTarget, items);
    target && target.type === COMPONENT_TYPES.buns
      ? !bunIsSelected &&
        dispatch({
          type: ADD_ITEM_TO_CHOICE,
          chosenItem: target,
          isBun: true,
        })
      : dispatch({
          type: ADD_ITEM_TO_CHOICE,
          chosenItem: target,
          isBun: false,
        });
  };

  const separatedData = getIngredientCards(
    items,
    openIngredientPop,
    addToChoice
  );
  return (
    <div className={`${ingredStyles.rowsContainer} mt-10`}>
      <IngredientRow title="Булки">{separatedData.buns}</IngredientRow>
      <IngredientRow title="Соусы">{separatedData.sauces}</IngredientRow>
      <IngredientRow title="Начинки">{separatedData.mains}</IngredientRow>
      {selectedIngredient && (
        <Modal header="Детали ингредиента" onClose={closeIngredientPop}>
          <IngredientDetails selectedIngredient={selectedIngredient} />
        </Modal>
      )}
    </div>
  );
}
