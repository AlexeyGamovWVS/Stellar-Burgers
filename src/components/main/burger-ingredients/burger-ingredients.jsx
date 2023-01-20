import burgerIngrStyles from "./burger-ingredients.module.css";
import Tabs from "./tabs/tabs";
import Ingredients from "./ingredients/ingredients";
import { useRef, useState } from "react";
import { COMPONENT_TYPES } from "../../utils/data";
export default function BurgerIngredients() {
  const [activeTab, setActiveTab] = useState(COMPONENT_TYPES.buns);
  const rowsRefObj = {
    bunsRef: useRef(null),
    saucesRef: useRef(null),
    mainsRef: useRef(null),
  };

  return (
    <div className={burgerIngrStyles.ingredients}>
      <h2 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h2>
      <Tabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        rowsRefObj={rowsRefObj}
      />
      <Ingredients
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        rowsRefObj={rowsRefObj}
      />
    </div>
  );
}
