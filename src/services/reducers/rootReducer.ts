import { combineReducers } from "redux";
import { selectedItemsReducer } from "./selectedItems";
import { ingredientsReducer } from "./ingredients";
import { orderReducer } from "./order";
import { profileReducer } from "./profile";
import { socketMiddlewareReduser } from "./soketMiddleware";
import { socketPersonalMiddlewareReduser } from "./soketPersonalMiddleware";

export const rootReducer = combineReducers({
  allItems: ingredientsReducer,
  selectedItems: selectedItemsReducer,
  order: orderReducer,
  profile: profileReducer,
  wsconnection: socketMiddlewareReduser,
  wspersonalconnection: socketPersonalMiddlewareReduser,
});
