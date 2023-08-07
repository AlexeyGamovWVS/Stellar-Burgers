import styles from "./feeds.module.css";
import OrderCard from "../orderCard/orderCard";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Feeds(orders) {
  const orderNum = "54654654";
  const orderDate = "2022-10-10T17:33:32.877Z";
  const orderName = "Death Star Starship Main бургер";
  const amountIngredients = 6;
  const price = 54568;

  const order = {
    date: orderDate,
    number: orderNum,
    name: orderName,
    ingredientsPictures: amountIngredients,
    price: price,
    key: orderNum,
  };

  const location = useLocation();
  const state = location.state;

  const { items } = useSelector((store) => store.allItems);

  return (
    <div className={styles.feeds}>
      <h2 className="text text_type_main-large mt-10 mb-5">Лента заказов</h2>
      <ul className={`${styles.feeds__list} mt-10`}>
        <OrderCard
          date={order.date}
          number={order.number}
          name={order.name}
          images={order.ingredientsPictures}
          price={order.price}
          key={order.number}
          state={state}
          location={location}
        ></OrderCard>
      </ul>
    </div>
  );
}
