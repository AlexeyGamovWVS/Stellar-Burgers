import React from "react";
import {Tabs} from "./tabs/tabs";
import mainStyles from '../main.module.css'

export default class BurgerIngredients extends React.Component {
	render() {
		return(
			<div className={mainStyles.ingredients}>
				<h2 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h2>
				<Tabs />
			</div>
		)
	}
}