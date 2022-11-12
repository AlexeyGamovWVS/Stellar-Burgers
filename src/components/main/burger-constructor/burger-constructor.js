import React from "react";
import constructurStyles from './burger-constructor.module.css'
export default class BurgerConstructor extends React.Component {
	render() {
		return(
			<div className={constructurStyles.constructor}>
				<p>Конструктор</p>
			</div>
		)
	}
}