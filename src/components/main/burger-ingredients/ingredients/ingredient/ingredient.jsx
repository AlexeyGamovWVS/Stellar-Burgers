import itemStyles from "./ingredient.module.css";
import PropTypes from "prop-types";

import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
export default function Ingredient({
  name,
  price,
  image,
  onOpen,
  opnId,
}) {
  return (
    <li className={itemStyles.item} onClick={onOpen} id={opnId}>
      <Counter count={1} size="default" />
      <img className={`ml-4 mr-4`} src={image} alt={name} />
      <div className={itemStyles.price}>
        <p className="text text_type_digits-default mr-2">{price}</p>
        <CurrencyIcon />
      </div>
      <p className="text text_type_main-default">{name}</p>
    </li>
  );
}

Ingredient.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  onOpen: PropTypes.func.isRequired,
  opnId: PropTypes.string.isRequired,
};
