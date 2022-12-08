import BurgerIngredients from "./burger-ingredients/burger-ingredients";
import BurgerConstructor from "./burger-constructor/burger-constructor";
import mainStyles from "./main.module.css";
import PropTypes from "prop-types";
import { IngredientPropType } from "../utils/data";

export default function Main({ data, onOpenOrder, onOpenIngredient }) {
  return (
    <main>
      <section className={mainStyles.main}>
        <BurgerIngredients data={data} onOpen={onOpenIngredient} />
        <BurgerConstructor data={data} onOpen={onOpenOrder} />
      </section>
    </main>
  );
}

Main.protoTypes = {
  data: PropTypes.arrayOf(IngredientPropType.isRequired).isRequired,
  onOpenOrder: PropTypes.func.isRequired,
  onOpenIngredient: PropTypes.func.isRequired,
};
