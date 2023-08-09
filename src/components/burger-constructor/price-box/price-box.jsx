import { CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import priceStyles from "./price-box.module.css";
import { useMemo } from "react";
import { COMPONENT_TYPES } from "../../../utils/data";
import { useDispatch, useSelector } from "react-redux";
import { sendOrderData } from "../../../services/actions/order";
import { useNavigate } from "react-router-dom";
export default function PriceBox() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { selectedItems, selectedBun } = useSelector((store) => store.selectedItems);
  const userInfo = useSelector((store) => store.profile.userInfo);

  const fullOrder = useMemo(() => {
    const fullArray = [...selectedItems];
    if (selectedBun) {
      fullArray.unshift(selectedBun);
    }
    return fullArray;
  }, [selectedBun, selectedItems]);

  const orderBtnClick = () => {
    if (userInfo !== null) {
      const dataIds = fullOrder.map((item) => item._id);
      dispatch(sendOrderData(dataIds));
    } else {
      navigate("/login", { replace: false });
    }
  };

  const sum = useMemo(() => {
    return fullOrder.reduce(
      (acc, currentItem) =>
        currentItem.type === COMPONENT_TYPES.buns
          ? acc + currentItem.price * 2
          : acc + currentItem.price,
      0
    );
  }, [fullOrder]);

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
        disabled={!selectedBun || selectedItems.length < 2}
      >
        Оформить заказ
      </Button>
    </div>
  );
}
