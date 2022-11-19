import constructurStyles from "./burger-constructor.module.css";
import data from "../../utils/data";
import BurgerComponents from "./burger-components/burger-components";
import PriceBox from "./price-box/price-box";

const bun = data.find((item) => item.name === "Краторная булка N-200i");
const sauce = data.find(
  (item) => item.name === "Соус традиционный галактический"
);
const meat = data.find(
  (item) => item.name === "Мясо бессмертных моллюсков Protostomia"
);
const tree = data.find((item) => item.name === "Плоды Фалленианского дерева");
const tors = data.find((item) => item.name === "Хрустящие минеральные кольца");

const yourChoice = [bun, sauce, meat, tree, tors, tors, bun];
let sum;
yourChoice.forEach((item) => (sum += item.price));

export default function BurgerConstructor() {
  return (
    <div className={`pt-25 ${constructurStyles.constructor}`}>
      <BurgerComponents data={yourChoice} />
      <PriceBox data={yourChoice} />
    </div>
  );
}
