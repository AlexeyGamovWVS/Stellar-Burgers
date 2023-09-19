import thunk from "redux-thunk";
import { rootReducer } from "./reducers/rootReducer";
import { configureStore } from "@reduxjs/toolkit";
import { socketMiddleware } from "./middleware/socketMiddleware";
import { wsActions, wsPersonalActions } from "./actions/wsActionTypes";
import { socketPersonalMiddleware } from "./middleware/socketPersonalMiddleware";

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk, socketMiddleware(wsActions), socketPersonalMiddleware(wsPersonalActions)],
	// middleware: (getDafaultMiddleware) => {
// 	return getDafaultMiddleware().concat(название)
// } - чтобы подключить ещё какие-то дефолтные мидлвары
  devTools: process.env.NODE_ENV !== "production",
});