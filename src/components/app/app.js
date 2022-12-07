import React from "react";
import ErrorBoundary from "../utils/errorBoudary";
import AppHeader from "../header/header";
import AppMain from "../main/main";
import api from "../utils/api";
import Modal from "../modal/modal";

function App() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [ingredientsData, setIngredientsData] = React.useState([]);
	const [isOrderVisible, setOrderVisibility] = React.useState(false);

	const openOrderPop = () => setOrderVisibility(true);
	const closeOrderPop = () => setOrderVisibility(false);

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
      <AppMain data={ingredientsData} opnOrder={openOrderPop}/>
			{isOrderVisible && (
				<Modal header='ararart' onClose={closeOrderPop}>
					ваш факинговый заказ
				</Modal>
			)}
    </ErrorBoundary>
  );
}

export default App;
