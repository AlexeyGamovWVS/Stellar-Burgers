import AppHeader from "../components/header/header";
import IngredientDetails from "../components/ingredientDetails/ingredientDetails";
import styles from "./ingredient.module.css";

export function IngredientPage() {
  return (
    <>
      <AppHeader />
      <main className={styles.main}>
        <section className={styles.container}>
          <h1 className={"text text_type_main-large"}>
            Детали ингредиента
          </h1>
          <IngredientDetails />
        </section>
      </main>
    </>
  );
}
