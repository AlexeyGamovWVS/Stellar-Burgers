import styles from "./order-details.module.css";
import doneIcon from "../../../assets/images/done.gif";
import { useContext } from "react";
import { OrderContext } from "../../../services/orderContext";

export default function OrderDetails() {
	const {orderDetails} = useContext(OrderContext);
  return (
    <>
      <p className={`${styles.number} text text_type_digits-large mt-4`}>
        {orderDetails.order.number}
      </p>
      <p className={`text text_type_main-medium mt-8`}>идентификатор заказа</p>
      <img className="mt-15" src={doneIcon} alt="Галочка." />
      <p className={`text text_type_main-default mt-15`}>
        Ваш заказ начали готовить
      </p>
      <p
        className={`text text_type_main-default text_color_inactive mt-2 mb-20`}
      >
        Дождитесь готовности на орбитальной станции
      </p>
    </>
  );
}
