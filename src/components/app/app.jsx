import React from "react";
import ErrorBoundary from "../utils/errorBoudary";
import AppHeader from "../header/header";
import AppMain from "../main/main";
import api from "../utils/api";
import Modal from "../modal/modal";
import { ORDER_DATA } from "../utils/data";
import OrderDetails from "../modal/orderDetails/orderDetails";
import IngredientDetails from "../modal/ingredientDetails/ingredientDetails";

function App() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [ingredientsData, setIngredientsData] = React.useState([]);
	const [isOrderVisible, setOrderVisibility] = React.useState(false);
	const [currentIngredient, setCurrentIngredient] = React.useState(null);

	const openOrderPop = () => setOrderVisibility(true);
	const closeOrderPop = () => setOrderVisibility(false);
	const openIngedientPop = (e) => setCurrentIngredient(e.currentTarget.id);
	const closeIngredientPop = (e) => setCurrentIngredient(null);

  React.useEffect(() => {
    setIsLoading(true);
    api()
      .then((ingredientsData) => setIngredientsData(ingredientsData.data))
      .catch((err) => alert(`Shit happens... ${err} Попробуйте обновить страничку`))
      .finally(() => setIsLoading(false));
  }, []);
//	console.log(ingredientsData);
  return isLoading 
		? (<p className="text text_type_main-large mt-30 ml-30">Загружаем продукты...</p>) 
		: (
    <ErrorBoundary>
      <AppHeader />
      <AppMain data={ingredientsData} opnOrder={openOrderPop} opnIngredient={openIngedientPop}/>
			{isOrderVisible && (
				<Modal onClose={closeOrderPop}>
					<OrderDetails order={ORDER_DATA}/>
				</Modal>
			)}
			{currentIngredient && (
				<Modal header='Детали ингредиента' onClose={closeIngredientPop}>
					<IngredientDetails id={currentIngredient} data={ingredientsData} />
				</Modal>
			)}
    </ErrorBoundary>
  );
}

export default App;
