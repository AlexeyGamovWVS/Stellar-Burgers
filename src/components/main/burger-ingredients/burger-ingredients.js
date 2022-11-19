import React from "react";
import data from "../../utils/data";
import {
  Tab,
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import burgerIngrStyles from "./burger-ingredients.module.css";
import PropTypes from "prop-types";
export default class BurgerIngredients extends React.Component {
  render() {
    return (
      <div className={burgerIngrStyles.ingredients}>
        <h2 className="text text_type_main-large mt-10 mb-5">
          Соберите бургер
        </h2>
        <Tabs />
        <Ingredients data={data} />
      </div>
    );
  }
}

function Tabs() {
  const [current, setCurrent] = React.useState("buns");
  return (
    <div className={burgerIngrStyles.tabs}>
      <Tab value="buns" active={current === "buns"} onClick={setCurrent}>
        Булки
      </Tab>
      <Tab value="sauces" active={current === "sauces"} onClick={setCurrent}>
        Соусы
      </Tab>
      <Tab value="mains" active={current === "mains"} onClick={setCurrent}>
        Начинки
      </Tab>
    </div>
  );
}

function Ingredients({ data }) {
  const goodsMaps = getIngredientsMap(data);
  return (
    <div className={`${burgerIngrStyles.rowsContainer} mt-10`}>
      <IngredientRow title="Булки">{goodsMaps.buns}</IngredientRow>
      <IngredientRow title="Соусы">{goodsMaps.sauces}</IngredientRow>
      <IngredientRow title="Начинки">{goodsMaps.mains}</IngredientRow>
    </div>
  );
}

Ingredients.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
		_id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    proteins: PropTypes.number,
    fat: PropTypes.number,
    carbohydrates: PropTypes.number,
    calories: PropTypes.number,
    price: PropTypes.number,
    image: PropTypes.string,
    image_mobile: PropTypes.string,
    image_large: PropTypes.string,
    __v: PropTypes.number,
	})).isRequired,
};

function IngredientRow({title, ...props}) {
  return (
    <div className={`${burgerIngrStyles.row} row mt-10`}>
      <h3 className={`text text_type_main-medium`}>{title}</h3>
      <ul className={`${burgerIngrStyles.list} mt-6 pl-4 pr-4`}>
        {props.children}
      </ul>
    </div>
  );
}

IngredientRow.propTypes = {
	title: PropTypes.string,
	children: PropTypes.arrayOf(PropTypes.element),
}

function Ingredient({_id, name, price, image}) {
  return (
    <li className={burgerIngrStyles.item} key={_id}>
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
	image: PropTypes.string
}

function Image({img, name}) {
  return <img className={`ml-4 mr-4`} src={img} alt={name}></img>;
}

Image.propTypes = {
	img: PropTypes.string,
	name: PropTypes.string
}

function Price({price}) {
  return (
    <div className={burgerIngrStyles.price}>
      <p className="text text_type_digits-default mr-2">{price}</p>
      <CurrencyIcon />
    </div>
  );
}

Price.propTypes = {
	price: PropTypes.number
}

function Name({name}) {
  return <p className="text text_type_main-default">{name}</p>;
}

Name.propTypes = {
	name: PropTypes.string
}

function getIngredientsMap(data) {
  const buns = [],
    mains = [],
    sauces = [],
    undefinedType = [];

  data.forEach((element) => {
    const productMap = (
      <Ingredient
        key={element._id}
        name={element.name}
        image={element.image}
        price={element.price}
      />
    );
    switch (element.type) {
      case "main": {
        mains.push(productMap);
        break;
      }
      case "bun": {
        buns.push(productMap);
        break;
      }
      case "sauce": {
        sauces.push(productMap);
        break;
      }
      default: {
        undefinedType.push(element);
      }
    }
  });
  const separatedData = {
    mains: mains,
    buns: buns,
    sauces: sauces,
    undefinedType: undefinedType,
  };
  return separatedData;
}
