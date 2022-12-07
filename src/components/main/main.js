import BurgerIngredients from "./burger-ingredients/burger-ingredients";
import BurgerConstructor from "./burger-constructor/burger-constructor";
import mainStyles from "./main.module.css";
export default function Main({data}) {
  return (
    <main>
      <section className={mainStyles.main}>
        <BurgerIngredients data={data}/>
        <BurgerConstructor data={data}/>
      </section>
    </main>
  );
}
