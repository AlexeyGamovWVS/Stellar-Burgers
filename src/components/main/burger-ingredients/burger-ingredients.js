import React from "react";
import data from "../../utils/data";
import { Tab, Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import burgerIngrStyles from "./burger-ingredients.module.css";
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

function IngredientRow(props) {
  return (
    <div className={`${burgerIngrStyles.row} row mt-10`}>
      <h3 className={`text text_type_main-medium`}>{props.title}</h3>
      <ul className={`${burgerIngrStyles.list} mt-6 pl-4 pr-4`}>
        {props.children}
      </ul>
    </div>
  );
}

function Ingredient(props) {
  return (
    <li className={burgerIngrStyles.item} key={props._id}>
      <Counter count={1} size="default" />
      <Image img={props.image} alt={props.name} />
      <Price price={props.price} />
      <Name name={props.name} />
    </li>
  );
}

function Image(props) {
  return <img className={`ml-4 mr-4`} src={props.img} alt={props.name}></img>;
}

function Price(props) {
  return (
    <div className={burgerIngrStyles.price}>
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
