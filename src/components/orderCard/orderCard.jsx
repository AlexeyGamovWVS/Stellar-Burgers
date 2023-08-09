import { Link } from "react-router-dom";
import { CurrencyIcon, FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./orderCard.module.css";
import ingredientsImagesMap from "./orderCard.utils";
import { ORDER_STATUSES, getStatusText } from "../../utils/data";
import PropTypes from "prop-types";

export default function OrderCard({
  date,
  number,
  name,
  ingredientsPictures,
  price,
  state,
  location,
  status,
}) {
  state = { ...state, back: location };

  const getLinkAdress = () => {
    return location.pathname.startsWith("/feed") ? `/feed/${number}` : `/profile/orders/${number}`;
  };

  const images = ingredientsImagesMap(ingredientsPictures, styles);
  const statusStyles = {
    default: `${styles.card__status} text text_type_main-small mt-2`,
    done: `${styles.card__status} text text_type_main-small mt-2 ${styles.card__status_done}`,
    cancelled: `${styles.card__status} text text_type_main-small mt-2 ${styles.card__status_canselled}`,
  };

  return (
    <li className={`${styles.feeds__card} mr-2`}>
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
              status === ORDER_STATUSES.done
                ? statusStyles.done
                : status === ORDER_STATUSES.canselled
                ? statusStyles.cancelled
                : statusStyles.default
            }
          >
            {getStatusText(status)}
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

OrderCard.propTypes = {
  date: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  ingredientsPictures: PropTypes.arrayOf(PropTypes.string).isRequired,
  price: PropTypes.number.isRequired,
  state: PropTypes.object,
  location: PropTypes.object.isRequired,
  status: PropTypes.string,
};
