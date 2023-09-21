import thunk from "redux-thunk";
import { rootReducer } from "./reducers/rootReducer";
import { configureStore } from "@reduxjs/toolkit";
import { socketMiddleware } from "./middleware/socketMiddleware";
import { wsActions, wsPersonalActions } from "./actions/wsActionTypes";

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk, socketMiddleware(wsActions), socketMiddleware(wsPersonalActions)],
  devTools: process.env.NODE_ENV !== "production",
});
