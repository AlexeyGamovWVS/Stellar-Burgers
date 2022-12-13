import PropTypes from "prop-types";
import {
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import priceStyles from "./price-box.module.css";
import { useContext } from "react";
import { ChoiceContext } from "../../../../services/appContext";
export default function PriceBox({ onOpen }) {
	const data = useContext(ChoiceContext);
  const sum = data.reduce((prev, next) => prev + next.price, 0);
  return (
    <div className={`${priceStyles.handlers} mt-10`}>
      <div className={`${priceStyles.price} mr-10`}>
        <p className="text text_type_digits-medium mr-2">{sum}</p>
        <CurrencyIcon type="primary" />
      </div>
      <Button type="primary" size="large" htmlType="button" onClick={onOpen}>
        Оформить заказ
      </Button>
    </div>
  );
}

PriceBox.propTypes = {
  onOpen: PropTypes.func.isRequired,
};
