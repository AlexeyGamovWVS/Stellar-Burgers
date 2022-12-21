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

export default function Ingredients() {
  const dispatch = useDispatch();
  const { items } = useSelector((store) => store.allItems);
  const { selectedIngredient } = useSelector((store) => store.currentWatchItem);

  const openIngredientPop = (e) => {
    dispatch({
      type: SET_SELECTED_INGREDIENT,
      ingredientData: items.find((item) => item._id === e.currentTarget.id),
    });
  };
  const closeIngredientPop = () => {
    dispatch({
      type: REMOVE_SELECTED_INGREDIENT,
    });
  };

  const separatedData = getIngredientCards(items, openIngredientPop);
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
