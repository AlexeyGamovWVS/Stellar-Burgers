// import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./feedOrderDetails.module.css";
import { CurrencyIcon, FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import { useParams } from "react-router-dom";
import { ORDER_STATUSES } from "../../utils/data";
import { countIngedientsInOrder, getUniqArrayItems } from "./feedOrderDetails.utils";
import { getStatusText } from "../../utils/data";
import { useEffect } from "react";
import { getUniqOrderData } from "../../services/actions/order";

export default function FeedOrderDetails() {
  const dispatch = useDispatch();
  const orderNum = useParams().id;
  const items = useSelector((store) => store.allItems.items);
  const orders = useSelector((store) => store.wsconnection.orders);
  const currentOrderDetails = useSelector((store) => store.order.currentOrderDetails);

  useEffect(() => {
    if (!orders.length) {
      dispatch(getUniqOrderData(orderNum));
    }
  }, [orders, dispatch, orderNum]);

  const openedOrderData = orders.length
    ? orders.find((order) => `${order.number}` === `${orderNum}`)
    : currentOrderDetails;

  const orderIngredients = openedOrderData?.ingredients.map((ingredient) =>
    items.find((storeItem) => storeItem._id === ingredient)
  );
  const totalOrderPrice = orderIngredients?.reduce((acc, current) => acc + current.price, 0);
  const statusText = getStatusText(openedOrderData?.status);

  const statusStyles = {
    default: `${styles.status} text text_type_main-small mb-15`,
    done: `${styles.status} text text_type_main-small mb-15 ${styles.status_done}`,
    cancelled: `${styles.status} text text_type_main-small mb-15 ${styles.status_cancelled}`,
  };

  return (
    openedOrderData && (
      <div className={styles.container}>
        <p className={`${styles.ordernum} text text_type_digits-default mb-10`}>
          {openedOrderData.number}
        </p>
        <h1 className={`${styles.name} text text_type_main-medium mb-3`}>{openedOrderData.name}</h1>
        <p
          className={
            openedOrderData.status === ORDER_STATUSES.done
              ? statusStyles.done
              : openedOrderData.status === ORDER_STATUSES.canselled
              ? statusStyles.cancelled
              : statusStyles.default
          }
        >
          {statusText}
        </p>
        <h2 className={`${styles.title} text text_type_main-medium mb-6`}>Состав:</h2>
        <ul className={`${styles.ingredients} mb-10`}>
          {orderIngredients &&
            getUniqArrayItems(orderIngredients).map((item) => (
              <li key={item._id} className={styles.item}>
                <div className={styles.iconbox}>
                  <img className={styles.ingricon} src={item.image} alt={item.name} />
                </div>
                <p className={`${styles.ingrname} text text_type_main-default`}>{item.name}</p>
                <div className={styles.pricebox}>
                  <p className={`${styles.price} text text_type_digits-default`}>
                    {countIngedientsInOrder(item._id, orderIngredients)} x {item.price}
                  </p>
                  <CurrencyIcon />
                </div>
              </li>
            ))}
        </ul>
        <div className={styles.orderfooter}>
          <FormattedDate
            className={`${styles.datetext} text text_type_main-default text_color_inactive`}
            date={new Date(openedOrderData.createdAt)}
          />
          <div className={styles.pricebox}>
            <p className={`${styles.price} text text_type_digits-default`}>{totalOrderPrice}</p>
            <CurrencyIcon />
          </div>
        </div>
      </div>
    )
  );
}
