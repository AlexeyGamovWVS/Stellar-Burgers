import burgerIngrStyles from "./burger-ingredients.module.css";
import Tabs from "./tabs/tabs";
import Ingredients from "./ingredients/ingredients";
import PropTypes from "prop-types";
import { IngredientPropType } from "../../utils/data";
export default function BurgerIngredients({data}) {
  return (
    <div className={burgerIngrStyles.ingredients}>
      <h2 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h2>
      <Tabs />
      <Ingredients data={data} />
    </div>
  );
}

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(IngredientPropType).isRequired,
};

