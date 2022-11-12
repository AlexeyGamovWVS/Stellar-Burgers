import React from "react";
import BurgerIngredients from "./burger-ingredients/burger-ingredients";
import BurgerConstructor from "./burger-constructor/burger-constructor";
import mainStyles from "./main.module.css";
export default class Main extends React.Component {
	render() {
		return(
			<main className={mainStyles.main}>
				<BurgerIngredients />
				<BurgerConstructor />
			</main>
		)
	}
}