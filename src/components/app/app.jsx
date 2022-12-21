import React from "react";
import ErrorBoundary from "../utils/errorBoudary";
import AppHeader from "../header/header";
import AppMain from "../main/main";
import { IngredientsContext } from "../../services/appContext";
import { useSelector, useDispatch } from "react-redux";
import { getIngredientsData } from "../../services/actions/ingredients";

function App() {
	const dispatch = useDispatch();
	const {items, itemsRequest, itemsRequestMessage, itemsFailed} = useSelector((store) => store.allItems);
	React.useEffect(() => {
		dispatch(getIngredientsData());
	}, [dispatch]);
	
  return (itemsRequest || itemsFailed) ? (
    <p className="text text_type_main-large mt-30 ml-30">
      {itemsRequestMessage}
    </p>
  ) : (
    <ErrorBoundary>
      {items.length && (
        <>
          <AppHeader />
          <IngredientsContext.Provider value={items}>
            <AppMain />
          </IngredientsContext.Provider>
        </>
      )}
    </ErrorBoundary>
  );
}

export default App;
