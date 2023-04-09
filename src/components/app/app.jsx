import React from "react";
import ErrorBoundary from "../utils/errorBoudary";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../../pages";
import { useSelector, useDispatch } from "react-redux";
import { getIngredientsData } from "../../services/actions/ingredients";

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
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      )}
    </ErrorBoundary>
  );
}

export default App;
