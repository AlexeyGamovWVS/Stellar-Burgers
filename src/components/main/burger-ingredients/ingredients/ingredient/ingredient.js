import itemStyles from "./ingredient.module.css";
import PropTypes from "prop-types";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

export default function Ingredient({ _id, name, price, image }) {
  return (
    <li className={itemStyles.item} key={_id}>
      <Counter count={1} size="default" />
      <Image img={image} alt={name} />
      <Price price={price} />
      <Name name={name} />
    </li>
  );
}

Ingredient.propTypes = {
  _id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
};

function Image({ img, name }) {
  return <img className={`ml-4 mr-4`} src={img} alt={name}></img>;
}

Image.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
};

function Price({ price }) {
  return (
    <div className={itemStyles.price}>
      <p className="text text_type_digits-default mr-2">{price}</p>
      <CurrencyIcon />
    </div>
  );
}

Price.propTypes = {
  price: PropTypes.number,
};

function Name({ name }) {
  return <p className="text text_type_main-default">{name}</p>;
}

Name.propTypes = {
  name: PropTypes.string,
};
