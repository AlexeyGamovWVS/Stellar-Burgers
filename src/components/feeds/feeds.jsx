import { Link } from "react-router-dom";
import { CurrencyIcon, FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./feeds.module.css";
export default function Feeds() {
  const orderNum = "#54654654";
  const orderDate = "2022-10-10T17:33:32.877Z";
  const orderName = "Death Star Starship Main бургер";
  const amountIngredients = 6;
  const price = 54568;
  return (
    <div className={styles.feeds}>
      <h2 className="text text_type_main-large mt-10 mb-5">Лента заказов</h2>
      <ul className={`${styles.feeds__list} mt-10`}>
        <li className={styles.feeds__card}>
          <Link to={"/"} className={styles.card}>
            <div className={styles.card__header}>
              <p className={`text text_type_digits-default`}>{orderNum}</p>
              <FormattedDate
                className={`text text_type_main-default text_color_inactive`}
                date={new Date(orderDate)}
              />
            </div>
            <p className={`text text_type_main-medium`}>{orderName}</p>
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
      </ul>
    </div>
  );
}
