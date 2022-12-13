import PropTypes from "prop-types";
import {
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import priceStyles from "./price-box.module.css";
import { useContext } from "react";
import { ChoiceContext } from "../../../../services/appContext";
import { sendOrder } from "../../../utils/api";
import { OrderContext } from "../../../../services/orderContext";
export default function PriceBox({ onOpen }) {
  const data = useContext(ChoiceContext);
  const { setOrderDetails } = useContext(OrderContext);
  const orderBtnClick = () => {
    const dataIds = data.map((item) => item._id);
    sendOrder(dataIds)
      .then((res) => {
        onOpen();
        console.log(res);
        setOrderDetails(res);
      })
      .catch((err) => {
        alert(
          "Не удалось отправить заказ, вероятно у нас какие-то неполадки с сервером. Попробуйте ещё раз позднее. " +
            err
        );
      });
  };

  const sum = data.reduce(
    (acc, currentItem) =>
      currentItem.type === "bun"
        ? acc + currentItem.price * 2
        : acc + currentItem.price,
    0
  );
  return (
    <div className={`${priceStyles.handlers} mt-10`}>
      <div className={`${priceStyles.price} mr-10`}>
        <p className="text text_type_digits-medium mr-2">{sum}</p>
        <CurrencyIcon type="primary" />
      </div>
      <Button
        type="primary"
        size="large"
        htmlType="button"
        onClick={orderBtnClick}
      >
        Оформить заказ
      </Button>
    </div>
  );
}

PriceBox.propTypes = {
  onOpen: PropTypes.func.isRequired,
};
