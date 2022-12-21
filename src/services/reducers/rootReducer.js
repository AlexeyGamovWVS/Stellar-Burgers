import { combineReducers } from "redux";
import { selectedItemsReducer } from "./chosenIngredients";
import { currentItemReducer } from "./currentItem";
import { ingredientsReducer } from "./ingredients";
export const rootReducer = combineReducers({
	allItems: ingredientsReducer,
	selectedItems: selectedItemsReducer,
	currentWatchItem: currentItemReducer,
//	order: {},
});