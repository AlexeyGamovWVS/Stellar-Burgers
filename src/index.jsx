import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./components/app/app.jsx";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./services/reducers/rootReducer.js";
import { BrowserRouter } from "react-router-dom";
import { socketMiddleware } from "./services/middleware/socketMiddleware.js";
import { wsActions } from "./services/actions/wsActionTypes.js";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  applyMiddleware(socketMiddleware(wsActions))
);
const store = createStore(rootReducer, enhancer);
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
