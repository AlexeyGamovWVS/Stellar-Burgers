import React from "react";
import ErrorBoundary from "../utils/errorBoudary";
import AppHeader from "../header/header";
import AppMain from "../main/main";
import { useSelector, useDispatch } from "react-redux";
import { getIngredientsData } from "../../services/actions/ingredients";
import IngredientMain from "../fullingredient/fullingredient";
import Registration from "../registration/registration/registration";

function App() {
  const dispatch = useDispatch();
  const { items, itemsRequest, itemsRequestMessage, itemsFailed } =
    useSelector((store) => store.allItems);

  React.useEffect(() => {
    dispatch(getIngredientsData());
  }, [dispatch]);

  return itemsRequest || itemsFailed ? (
    <p className="text text_type_main-large mt-30 ml-30">
      {itemsRequestMessage}
    </p>
  ) : (
    <ErrorBoundary>
      {items.length && (
        <>
          <AppHeader />
          <AppMain />
          <IngredientMain />
          <Registration />
        </>
      )}
    </ErrorBoundary>
  );
}

export default App;
