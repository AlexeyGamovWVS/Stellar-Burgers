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
import { useDispatch, useSelector } from "react-redux";
import { ADD_ITEM_TO_CHOICE } from "../../../services/actions/chosenIngredients";

export default function BurgerConstructor() {
  const { items } = useSelector((store) => store.allItems);
  const { selectedItems } = useSelector((store) => store.selectedItems);
  const [orderDetails, setOrderDetails] = useState(null);
  const yourChioce = useMemo(() => genOrder(items), [items]);
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
