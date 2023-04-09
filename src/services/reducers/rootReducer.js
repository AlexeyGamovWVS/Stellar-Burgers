import { combineReducers } from "redux";
import { selectedItemsReducer } from "./selectedItems";
import { currentItemReducer } from "./currentItem";
import { ingredientsReducer } from "./ingredients";
import { orderReducer } from "./order";
import { profileReducer } from "./profile";
export const rootReducer = combineReducers({
  allItems: ingredientsReducer,
  selectedItems: selectedItemsReducer,
  currentWatchItem: currentItemReducer,
  order: orderReducer,
	profile: profileReducer,
});
