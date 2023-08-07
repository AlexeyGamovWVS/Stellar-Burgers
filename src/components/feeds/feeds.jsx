import styles from "./feeds.module.css";
import OrderCard from "../orderCard/orderCard";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Feeds() {
  const location = useLocation();
  const state = location.state;

  const { items } = useSelector((store) => store.allItems);
  const { orders } = useSelector((store) => store.wsconnection);

  const ordersMap = orders?.map((order) => {
    const ingredientsPictures = order.ingredients.map(
      (ingredient) => items.filter((storeItem) => storeItem._id === ingredient)[0].image
    );
    const totalPrice = order.ingredients
      .map((ingredient) => items.filter((storeItem) => storeItem._id === ingredient)[0].price)
      .reduce((acc, current) => {
        return acc + current;
      }, 0);

    return (
      <OrderCard
        date={order.createdAt}
        number={order.number}
        name={order.name}
        ingredientsPictures={ingredientsPictures}
        price={totalPrice}
        key={order.number}
        state={state}
        location={location}
      ></OrderCard>
    );
  });

  return (
    <div className={styles.feeds}>
      <h2 className="text text_type_main-large mt-10 mb-5">Лента заказов</h2>
      <ul className={`${styles.feeds__list} mt-10`}>{ordersMap && ordersMap}</ul>
    </div>
  );
}
