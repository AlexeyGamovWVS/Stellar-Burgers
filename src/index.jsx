import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/app/app.jsx";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
