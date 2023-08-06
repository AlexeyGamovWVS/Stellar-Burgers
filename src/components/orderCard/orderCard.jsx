import { Link } from "react-router-dom";
import { CurrencyIcon, FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./orderCard.module.css";

export default function OrderCard({ date, number, name, ingredientsPictures, price, key }) {
  return (
    <li className={styles.feeds__card} key={key}>
      <Link to={"/"} className={styles.card}>
        <div className={styles.card__header}>
          <p className={`text text_type_digits-default`}>{number}</p>
          <FormattedDate
            className={`text text_type_main-default text_color_inactive`}
            date={new Date(date)}
          />
        </div>
        <p className={`text text_type_main-medium`}>{name}</p>
        <div className={styles.card__total}>
          <ul className={styles.card__ingredients}>
            <li>Ingredient</li>
          </ul>
          <div className={styles.card__pricebox}>
            <p className={`text text_type_digits-default`}>{price}</p>
            <CurrencyIcon />
          </div>
        </div>
      </Link>
    </li>
  );
}
