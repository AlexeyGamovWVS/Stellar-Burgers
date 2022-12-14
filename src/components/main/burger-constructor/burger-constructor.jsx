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
import { genOrder } from "./burger-constructor.utils";

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
