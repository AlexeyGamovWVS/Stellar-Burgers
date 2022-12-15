import {
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import priceStyles from "./price-box.module.css";
import { useContext, useMemo } from "react";
import { ChoiceContext } from "../../../../services/appContext";
import { sendOrder } from "../../../utils/api";
import { OrderContext } from "../../../../services/orderContext";
import { COMPONENT_TYPES } from "../../../utils/data";

export default function PriceBox() {
  const data = useContext(ChoiceContext);
  const { setOrderDetails } = useContext(OrderContext);

  const orderBtnClick = () => {
    const dataIds = data.map((item) => item._id);
		
    sendOrder(dataIds)
      .then((res) => setOrderDetails(res))
      .catch((err) => {
        alert(
          "Не удалось отправить заказ, вероятно у нас какие-то неполадки с сервером. Попробуйте ещё раз позднее. " +
            err
        );
      });
  };

  const sum = useMemo(() => {
    return data.reduce(
      (acc, currentItem) =>
        currentItem.type === COMPONENT_TYPES.buns
          ? acc + currentItem.price * 2
          : acc + currentItem.price,
      0
    );
  }, [data]);

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
