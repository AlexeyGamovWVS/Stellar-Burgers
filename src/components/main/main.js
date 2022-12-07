import BurgerIngredients from "./burger-ingredients/burger-ingredients";
import BurgerConstructor from "./burger-constructor/burger-constructor";
import mainStyles from "./main.module.css";
import PropTypes from "prop-types";
import { IngredientPropType } from "../utils/data";

export default function Main({data, opnOrder}) {
  return (
    <main>
      <section className={mainStyles.main}>
        <BurgerIngredients data={data}/>
        <BurgerConstructor data={data} opnOrder={opnOrder}/>
      </section>
    </main>
  );
}

Main.protoTypes = {
	data: PropTypes.arrayOf(IngredientPropType).isRequired,
	opnOrder: PropTypes.func.isRequired,
}
