import React from "react";
import mainStyles from '../main.module.css'
export default class BurgerConstructor extends React.Component {
	render() {
		return(
			<div className={mainStyles.constructor}>
				<p>Конструктор</p>
			</div>
		)
	}
}