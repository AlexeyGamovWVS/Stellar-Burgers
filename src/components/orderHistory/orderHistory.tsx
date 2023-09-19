import { useLocation } from "react-router-dom";
import styles from "./orderHistory.module.css";
import OrderCard from "../orderCard/orderCard";
import { useAppSelector } from "../..";

export function OrderHistory() {
  const location = useLocation();
  const state = location.state;

  const items = useAppSelector((store) => store.allItems.items);
  const orders = useAppSelector((store) => store.wspersonalconnection.orders);
	console.log(orders);
	
  const ordersMap = orders
    ?.sort((a, b) => new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf())
    .map((order) => {
      const ingredientsPictures = order.ingredients.map(
        (ingredient: string) => items.filter((storeItem) => storeItem._id === ingredient)[0].image
      );
      const totalPrice = order.ingredients
        .map(
          (ingredient: string) => items.filter((storeItem) => storeItem._id === ingredient)[0].price
        )
        .reduce((acc: number, current: number) => {
          return acc + current;
        }, 0);

      return (
        <OrderCard
          date={order.createdAt}
          number={order.number}
          // name={order.name}
          status={order.status}
          ingredientsPictures={ingredientsPictures}
          price={totalPrice}
          state={state}
          location={location}
          key={order.number}
        ></OrderCard>
      );
    });

  return (
    <div className={styles.feeds}>
      <h2 className="text text_type_main-large mt-10 mb-5">Лента заказов</h2>
      <ul className={`${styles.feeds__list} mt-10`}>{ordersMap}</ul>
    </div>
  );
}
