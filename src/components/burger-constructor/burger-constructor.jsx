import constructurStyles from "./burger-constructor.module.css";
import BurgerComponents from "./burger-components/burger-components";
import PriceBox from "./price-box/price-box";
import OrderDetails from "../modal/orderDetails/orderDetails";
import Modal from "../modal/modal";
import { useDispatch, useSelector } from "react-redux";
import { ORDER_ITEMS_RESET } from "../../services/actions/order";
import { CLEAN_BURGER } from "../../services/actions/selectedItems";

export default function BurgerConstructor() {
  const dispatch = useDispatch();
  const { orderDetails, orderRequest } = useSelector((store) => store.order);

  const resetOrder = () => {
    dispatch({
      type: CLEAN_BURGER,
    });
    dispatch({
      type: ORDER_ITEMS_RESET,
    });
  };

  return (
    <div className={`pt-25 ${constructurStyles.constructor}`}>
      <BurgerComponents />
      <PriceBox />
      {(orderDetails !== null || orderRequest) && (
        <Modal onClose={resetOrder}>
          <OrderDetails />
        </Modal>
      )}
    </div>
  );
}
