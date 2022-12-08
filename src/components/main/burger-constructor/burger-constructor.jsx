import constructurStyles from "./burger-constructor.module.css";
import BurgerComponents from "./burger-components/burger-components";
import PriceBox from "./price-box/price-box";
import PropTypes from "prop-types";
import { IngredientPropType } from "../../utils/data";

function genOrder(data) {
  const bun = data.find((item) => item.name === "Краторная булка N-200i");
  const sauce = data.find(
    (item) => item.name === "Соус традиционный галактический"
  );
  const meat = data.find(
    (item) => item.name === "Мясо бессмертных моллюсков Protostomia"
  );
  const tree = data.find((item) => item.name === "Плоды Фалленианского дерева");
  const tors = data.find(
    (item) => item.name === "Хрустящие минеральные кольца"
  );

  return [bun, sauce, meat, tree, tors, tors, bun];
}

export default function BurgerConstructor({ data, onOpen }) {
  const yourChioce = genOrder(data);
  return (
    <div className={`pt-25 ${constructurStyles.constructor}`}>
      <BurgerComponents data={yourChioce} />
      <PriceBox data={yourChioce} onOpen={onOpen} />
    </div>
  );
}

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(IngredientPropType.isRequired).isRequired,
  onOpen: PropTypes.func.isRequired,
};
