import React from "react";
import ErrorBoundary from "../utils/errorBoudary";
import AppHeader from "../header/header";
import AppMain from "../main/main";
import { api } from "../utils/api";
import Modal from "../modal/modal";
import IngredientDetails from "../modal/ingredientDetails/ingredientDetails";
import { IngredientsContext } from "../../services/appContext";

function App() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [ingredientsData, setIngredientsData] = React.useState([]);
  const [currentIngredient, setCurrentIngredient] = React.useState(null);

  const openIngredientPop = (e) => setCurrentIngredient(e.currentTarget.id);
  const closeIngredientPop = (e) => setCurrentIngredient(null);

  React.useEffect(() => {
    setIsLoading(true);
    api()
      .then((ingredientsData) => setIngredientsData(ingredientsData.data))
      .catch((err) =>
        alert(`Shit happens... ${err} Попробуйте обновить страничку`)
      )
      .finally(() => setIsLoading(false));
  }, []);

  return isLoading ? (
    <p className="text text_type_main-large mt-30 ml-30">
      Загружаем продукты...
    </p>
  ) : (
    <ErrorBoundary>
      {ingredientsData.length && (
        <IngredientsContext.Provider value={ingredientsData}>
          <AppHeader />
          <AppMain onOpenIngredient={openIngredientPop} />
          {currentIngredient && (
            <Modal header="Детали ингредиента" onClose={closeIngredientPop}>
              <IngredientDetails id={currentIngredient} />
            </Modal>
          )}
        </IngredientsContext.Provider>
      )}
    </ErrorBoundary>
  );
}

export default App;
