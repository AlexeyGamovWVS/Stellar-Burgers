import React from "react";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import iStyles from "./ingredients.module.css";

export default class Ingredients extends React.Component {
  render() {
    const goodsMaps = getIngredientsMap(this.props.data);
    return (
			<div className={`${iStyles.rowsContainer} mt-10`}>
				<IngredientRow items={goodsMaps.buns}>Булки</IngredientRow>
				<IngredientRow items={goodsMaps.sauces}>Соусы</IngredientRow>
				<IngredientRow items={goodsMaps.mains}>Начинки</IngredientRow>
			</div>
    );
  }
}

function IngredientRow(props) {
  return (
    <div className={`${iStyles.row} row mt-10`}>
      <h3 className={`text text_type_main-medium`}>{props.children}</h3>
      <ul className={`${iStyles.list} mt-6 pl-4 pr-4`}>{props.items}</ul>
    </div>
  );
}

function Ingredient(props) {
  return (
    <li className={iStyles.item} key={props._id}>
      <Counter count={1} size="default" />
      <Image img={props.image} alt={props.name} />
      <Price price={props.price} />
      <Name name={props.name} />
    </li>
  );
}

function Image(props) {
  return (
    <img
      className={`${iStyles.image} ml-4 mr-4`}
      src={props.img}
      alt={props.name}
    ></img>
  );
}

function Price(props) {
  return (
    <div className={iStyles.price}>
      <p className="text text_type_digits-default mr-2">{props.price}</p>
      <CurrencyIcon />
    </div>
  );
}

function Name(props) {
  return <p className="text text_type_main-default">{props.name}</p>;
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
