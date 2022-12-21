import { combineReducers } from "redux";
import { currentItemReducer } from "./currentItem";
import { ingredientsReducer } from "./ingredients";
export const rootReducer = combineReducers({
	allItems: ingredientsReducer,
//	selectedItems: [],
	currentWatchItem: currentItemReducer,
//	order: {},
});