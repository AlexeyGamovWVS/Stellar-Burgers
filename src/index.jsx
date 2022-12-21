import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/app/app.jsx";
import { compose, createStore } from 'redux';
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
