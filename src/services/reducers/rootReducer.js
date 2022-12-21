import { combineReducers } from "redux";
import { selectedItemsReducer } from "./chosenIngredients";
import { currentItemReducer } from "./currentItem";
import { ingredientsReducer } from "./ingredients";
import { orderReducer } from "./order";
export const rootReducer = combineReducers({
  allItems: ingredientsReducer,
  selectedItems: selectedItemsReducer,
  currentWatchItem: currentItemReducer,
  order: orderReducer,
});
