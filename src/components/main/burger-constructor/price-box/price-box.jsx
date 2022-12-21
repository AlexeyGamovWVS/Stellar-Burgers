import {
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import priceStyles from "./price-box.module.css";
import { useMemo } from "react";
import { COMPONENT_TYPES } from "../../../utils/data";
import { useDispatch, useSelector } from "react-redux";
import { sendOrderData } from "../../../../services/actions/order";
export default function PriceBox() {
  const dispatch = useDispatch();
  const { selectedItems, bunIsSelected } = useSelector(
    (store) => store.selectedItems
  );

  const orderBtnClick = () => {
    const dataIds = selectedItems.map((item) => item._id);
    dispatch(sendOrderData(dataIds));
  };

  const sum = useMemo(() => {
    return selectedItems.reduce(
      (acc, currentItem) =>
        currentItem.type === COMPONENT_TYPES.buns
          ? acc + currentItem.price * 2
          : acc + currentItem.price,
      0
    );
  }, [selectedItems]);

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
        disabled={!bunIsSelected || selectedItems.length < 2}
      >
        Оформить заказ
      </Button>
    </div>
  );
}
