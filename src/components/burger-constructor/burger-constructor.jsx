import constructurStyles from "./burger-constructor.module.css";
import BurgerComponents from "./burger-components/burger-components";
import PriceBox from "./price-box/price-box";
import OrderDetails from "../modal/orderDetails/orderDetails";
import Modal from "../modal/modal";
import { useDispatch, useSelector } from "react-redux";
import { orderItemsResetAction } from "../../services/actions/order";
import { cleanBurgerAction } from "../../services/actions/selectedItems";

export default function BurgerConstructor() {
  const dispatch = useDispatch();
  const { orderDetails, orderRequest } = useSelector((store) => store.order);

  const resetOrder = () => {
    dispatch(cleanBurgerAction());
    dispatch(orderItemsResetAction());
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
