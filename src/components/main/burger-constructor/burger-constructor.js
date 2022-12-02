import constructurStyles from "./burger-constructor.module.css";
import {data} from "../../utils/data";
import BurgerComponents from "./burger-components/burger-components";
import PriceBox from "./price-box/price-box";

const BUN = data.find((item) => item.name === "Краторная булка N-200i");
const SAUCE = data.find(
  (item) => item.name === "Соус традиционный галактический"
);
const MEAT = data.find(
  (item) => item.name === "Мясо бессмертных моллюсков Protostomia"
);
const TREE = data.find((item) => item.name === "Плоды Фалленианского дерева");
const TORS = data.find((item) => item.name === "Хрустящие минеральные кольца");

const YOUR_CHOICE = [BUN, SAUCE, MEAT, TREE, TORS, TORS, BUN];

export default function BurgerConstructor() {
  return (
    <div className={`pt-25 ${constructurStyles.constructor}`}>
      <BurgerComponents data={YOUR_CHOICE} />
      <PriceBox data={YOUR_CHOICE} />
    </div>
  );
}
