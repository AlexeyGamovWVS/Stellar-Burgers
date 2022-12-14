import React from "react";
import ErrorBoundary from "../utils/errorBoudary";
import AppHeader from "../header/header";
import AppMain from "../main/main";
import { api } from "../utils/api";
import Modal from "../modal/modal";
import OrderDetails from "../modal/orderDetails/orderDetails";
import IngredientDetails from "../modal/ingredientDetails/ingredientDetails";
import { IngredientsContext } from "../../services/appContext";
import { OrderContext } from "../../services/orderContext";

function App() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [ingredientsData, setIngredientsData] = React.useState([]);
  const [currentIngredient, setCurrentIngredient] = React.useState(null);
  const [orderDetails, setOrderDetails] = React.useState(null);

  const closeOrderPop = () => setOrderDetails(null);
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
          <OrderContext.Provider value={{ orderDetails, setOrderDetails }}>
            <AppMain
              onOpenIngredient={openIngredientPop}
            />
            {orderDetails !== null && (
                <Modal onClose={closeOrderPop}>
                  <OrderDetails />
                </Modal>
              )}
            {currentIngredient && (
              <Modal header="Детали ингредиента" onClose={closeIngredientPop}>
                <IngredientDetails id={currentIngredient} />
              </Modal>
            )}
          </OrderContext.Provider>
        </IngredientsContext.Provider>
      )}
    </ErrorBoundary>
  );
}

export default App;
