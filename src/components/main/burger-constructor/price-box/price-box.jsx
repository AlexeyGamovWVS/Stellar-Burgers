import PropTypes from "prop-types";
import { IngredientPropType } from "../../../utils/data";
import {
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import priceStyles from "./price-box.module.css";
export default function PriceBox({ data, opnOrder }) {
  const sum = data.reduce((prev, next) => prev + next.price, 0);
  return (
    <div className={`${priceStyles.handlers} mt-10`}>
      <div className={`${priceStyles.price} mr-10`}>
        <p className="text text_type_digits-medium mr-2">{sum}</p>
        <CurrencyIcon type="primary" />
      </div>
      <Button type="primary" size="large" htmlType="button" onClick={opnOrder}>
        Оформить заказ
      </Button>
    </div>
  );
}

PriceBox.propTypes = {
  data: PropTypes.arrayOf(IngredientPropType.isRequired),
  opnOrder: PropTypes.func.isRequired,
};
