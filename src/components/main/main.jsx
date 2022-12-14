import BurgerIngredients from "./burger-ingredients/burger-ingredients";
import BurgerConstructor from "./burger-constructor/burger-constructor";
import mainStyles from "./main.module.css";
import PropTypes from "prop-types";

export default function Main({ onOpenIngredient }) {
  return (
    <main>
      <section className={mainStyles.main}>
        <BurgerIngredients onOpen={onOpenIngredient} />
        <BurgerConstructor />
      </section>
    </main>
  );
}

Main.protoTypes = {
  onOpenIngredient: PropTypes.func.isRequired,
};
