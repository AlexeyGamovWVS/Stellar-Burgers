import styles from "./feeds.module.css";
import OrderCard from "../orderCard/orderCard";
import { useLocation } from "react-router-dom";
import { useAppSelector } from "../..";

export default function Feeds() {
  const location = useLocation();
  const state = location.state;

  const items = useAppSelector((store) => store.allItems.items);
  const orders = useAppSelector((store) => store.wsconnection.orders);
  console.log(orders);
  const ordersMap = orders
    ?.sort(
      (a, b) => new Date(b.createdAt).getMilliseconds() - new Date(a.createdAt).getMilliseconds()
    )
    .map((order) => {
      const ingredientsPictures = order?.ingredients?.map(
        (ingredient) => items.filter((storeItem) => storeItem._id === ingredient)[0]?.image ?? ""
      );

      if (!ingredientsPictures || ingredientsPictures.includes("")) {
        return null;
      }
      const totalPrice = order?.ingredients
        ?.map((ingredient) => items.filter((storeItem) => storeItem._id === ingredient)[0].price)
        .reduce((acc, current) => {
          return acc + current;
        }, 0);

      if (!totalPrice) {
        return null;
      }

      return (
        <OrderCard
          date={order.createdAt}
          number={order.number}
          name={order.name}
          ingredientsPictures={ingredientsPictures}
          price={totalPrice}
          state={state}
          key={order.number}
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
