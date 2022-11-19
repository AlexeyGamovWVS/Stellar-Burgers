import BurgerIngredients from "./burger-ingredients/burger-ingredients";
import BurgerConstructor from "./burger-constructor/burger-constructor";
import mainStyles from "./main.module.css";
export default function Main() {
  return (
    <main>
      <section className={mainStyles.main}>
        <BurgerIngredients />
        <BurgerConstructor />
      </section>
    </main>
  );
}
