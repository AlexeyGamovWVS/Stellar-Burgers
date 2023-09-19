import constructurStyles from "./burger-constructor.module.css";
import BurgerComponents from "./burger-components/burger-components";
import PriceBox from "./price-box/price-box";
import OrderDetails from "../modal/orderDetails/orderDetails";
import Modal from "../modal/modal";
import { orderItemsResetAction } from "../../services/actions/order";
import { cleanBurgerAction } from "../../services/actions/selectedItems";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../..";

const BurgerConstructor: FC = () => {
  const dispatch = useAppDispatch();
  const { orderDetails, orderRequest } = useAppSelector((store) => store.order);

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
};

export default BurgerConstructor;
