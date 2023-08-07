import { useLocation } from "react-router-dom";
import styles from "./orderHistory.module.css";
import OrderCard from "../orderCard/orderCard";

export function OrderHistory() {
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
    status: "done",
  };

  const location = useLocation();
  const state = location.state;

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
          status={order.status}
        ></OrderCard>

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
