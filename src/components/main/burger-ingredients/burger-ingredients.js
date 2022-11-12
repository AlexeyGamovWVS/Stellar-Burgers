import React from "react";
import mainStyles from '../main.module.css'
import data from "../../utils/data";
import Ingredients from "./ingredients/ingredients";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
export default class BurgerIngredients extends React.Component {
	render() {
		return(
			<div className={mainStyles.ingredients}>
				<h2 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h2>
				<Tabs />
				<Ingredients data={data}/>
			</div>
		)
	}
}

const Tabs = () => {
  const [current, setCurrent] = React.useState('buns')
  return (
    <div className={mainStyles.tabs}>
      <Tab value="buns" active={current === 'buns'} onClick={setCurrent}>
        Булки
      </Tab>
      <Tab value="sauces" active={current === 'sauces'} onClick={setCurrent}>
        Соусы
      </Tab>
      <Tab value="mains" active={current === 'mains'} onClick={setCurrent}>
        Начинки
      </Tab>
    </div>
  )
}