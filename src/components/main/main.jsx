import BurgerIngredients from "./burger-ingredients/burger-ingredients";
import BurgerConstructor from "./burger-constructor/burger-constructor";
import mainStyles from "./main.module.css";
import PropTypes from "prop-types";

export default function Main({ onOpenOrder, onOpenIngredient }) {
  return (
    <main>
      <section className={mainStyles.main}>
        <BurgerIngredients onOpen={onOpenIngredient} />
        <BurgerConstructor onOpen={onOpenOrder} />
      </section>
    </main>
  );
}

Main.protoTypes = {
  onOpenOrder: PropTypes.func.isRequired,
  onOpenIngredient: PropTypes.func.isRequired,
};
