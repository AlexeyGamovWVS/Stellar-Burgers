import { createRoot } from "react-dom/client";
import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import App from "./components/app/app";
import { BrowserRouter } from "react-router-dom";
import { store } from "./services/store";
import { ThunkAction } from "redux-thunk";
import { TItemsActions } from "./services/actions/ingredients.js";
import { TOrderActions } from "./services/actions/order.js";
import { TUserActions } from "./services/actions/profile.js";
import { TSelectedItemsActions } from "./services/actions/selectedItems.js";
import { TWsActions, TWsPersonalActions } from "./services/actions/wsActionTypes.js";
import { rootReducer } from "./services/reducers/rootReducer";
import type {} from "redux-thunk/extend-redux";

const root = createRoot(document.getElementById("root") as HTMLElement);

export type TApplicationActions =
  | TItemsActions
  | TOrderActions
  | TUserActions
  | TSelectedItemsActions
  | TWsPersonalActions
  | TWsActions;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  TApplicationActions
>;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
