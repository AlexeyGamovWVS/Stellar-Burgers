import constructurStyles from "./burger-constructor.module.css";
import BurgerComponents from "./burger-components/burger-components";
import PriceBox from "./price-box/price-box";
import { useContext, useMemo, useState } from "react";
import {
  ChoiceContext,
  IngredientsContext,
} from "../../../services/appContext";
import { OrderContext } from "../../../services/orderContext";
import OrderDetails from "../../modal/orderDetails/orderDetails";
import Modal from "../../modal/modal";

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

  return [bun, sauce, meat, tree, tors, tors];
}

export default function BurgerConstructor() {
  const data = useContext(IngredientsContext);
  const [orderDetails, setOrderDetails] = useState(null);
  const yourChioce = useMemo(() => genOrder(data), [data]);
  return (
    <div className={`pt-25 ${constructurStyles.constructor}`}>
      <ChoiceContext.Provider value={yourChioce}>
        <BurgerComponents />
        <OrderContext.Provider value={{ orderDetails, setOrderDetails }}>
          <PriceBox />
          {orderDetails !== null && (
            <Modal onClose={() => setOrderDetails(null)}>
              <OrderDetails />
            </Modal>
          )}
        </OrderContext.Provider>
      </ChoiceContext.Provider>
    </div>
  );
}
