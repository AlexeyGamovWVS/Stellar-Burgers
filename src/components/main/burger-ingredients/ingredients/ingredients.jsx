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
import {
  ADD_ITEM_TO_CHOICE,
  REMOVE_ITEM_FROM_CHOICE,
} from "../../../../services/actions/chosenIngredients";
import { COMPONENT_TYPES } from "../../../utils/data";
const findElement = (target, items) => {
  return items.find((item) => item._id === target.id);
};

export default function Ingredients() {
  const dispatch = useDispatch();
  const { items } = useSelector((store) => store.allItems);
  const { selectedIngredient } = useSelector((store) => store.currentWatchItem);
  const { bunIsSelected, selectedItems } = useSelector(
    (store) => store.selectedItems
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

  const replaceBun = (target) => {
    if (!findElement(target, selectedItems)) {
      dispatch({
        type: REMOVE_ITEM_FROM_CHOICE,
        chosenItem: selectedItems.find(
          (item) => item.type === COMPONENT_TYPES.buns
        ),
        isBun: true,
      });
      dispatch({
        type: ADD_ITEM_TO_CHOICE,
        chosenItem: findElement(target, items),
        isBun: true,
      });
    }
  };

  const addToChoice = (e) => {
    const target = findElement(e.currentTarget, items);
    target && target.type === COMPONENT_TYPES.buns
      ? !bunIsSelected
        ? dispatch({
            type: ADD_ITEM_TO_CHOICE,
            chosenItem: target,
            isBun: true,
          })
        : replaceBun(e.currentTarget)
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

  const scrollHandler = (e) => {
		console.log(e);
  };

  return (
    <div
      onScroll={scrollHandler}
      id={`rows_scroll_container`}
      className={`${ingredStyles.rowsContainer} mt-10`}
    >
      <IngredientRow id={COMPONENT_TYPES.buns} title="Булки">
        {separatedData.buns}
      </IngredientRow>
      <IngredientRow id={COMPONENT_TYPES.sauces} title="Соусы">
        {separatedData.sauces}
      </IngredientRow>
      <IngredientRow id={COMPONENT_TYPES.mains} title="Начинки">
        {separatedData.mains}
      </IngredientRow>
      {selectedIngredient && (
        <Modal header="Детали ингредиента" onClose={closeIngredientPop}>
          <IngredientDetails />
        </Modal>
      )}
    </div>
  );
}
