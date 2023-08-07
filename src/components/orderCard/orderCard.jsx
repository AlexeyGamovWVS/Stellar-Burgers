import { Link } from "react-router-dom";
import { CurrencyIcon, FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./orderCard.module.css";
import { ORDER_STATUSES } from "../../utils/data";
import ingredientsImagesMap from "./orderCard.utils";

export default function OrderCard({
  date,
  number,
  name,
  ingredientsPictures,
  price,
  key,
  state,
  location,
  status,
}) {
  state = { ...state, back: location };

  const getLinkAdress = () => {
    return location.pathname.startsWith("/feed") ? `/feed/${number}` : `/profile/orders/${number}`;
  };

  const images = ingredientsImagesMap(ingredientsPictures, styles);

  return (
    <li className={`${styles.feeds__card} mr-2`} key={key}>
      <Link to={getLinkAdress()} className={styles.card} state={state}>
        <div className={styles.card__header}>
          <p className={`text text_type_digits-default`}>{number}</p>
          <FormattedDate
            className={`text text_type_main-default text_color_inactive`}
            date={new Date(date)}
          />
        </div>
        <p className={`text text_type_main-medium mt-6`}>{name}</p>
        {status ? (
          <p
            className={
              status === "done"
                ? `${styles.card__status} text text_type_main-small mt-2 ${styles.card__status_done}`
                : status === "cancelled"
                ? `${styles.card__status} text text_type_main-small mt-2 ${styles.card__status_canselled}`
                : `${styles.card__status} text text_type_main-small mt-2`
            }
          >
            {status === ORDER_STATUSES.canselled
              ? "Отменен"
              : status === "done"
              ? "Выполнен"
              : "Готовится"}
          </p>
        ) : (
          <></>
        )}
        <div className={`${styles.card__total} mt-6`}>
          <ul className={styles.card__ingredients}>{images}</ul>
          <div className={styles.card__pricebox}>
            <p className={`text text_type_digits-default`}>{price}</p>
            <CurrencyIcon />
          </div>
        </div>
      </Link>
    </li>
  );
}