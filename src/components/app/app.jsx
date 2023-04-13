import React from "react";
import ErrorBoundary from "../../utils/errorBoudary";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  HomePage,
  RegistrationPage,
  LoginPage,
  ForgotPage,
  ProfilePage,
  ErrorPage,
  IngredientPage,
  OrdersPage,
} from "../../pages";
import { useSelector, useDispatch } from "react-redux";
import { getIngredientsData } from "../../services/actions/ingredients";
import { ResetPage } from "../../pages/reset-pass";

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
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/forgot-password" element={<ForgotPage />} />
            <Route path="/reset-password" element={<ResetPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route
              path="/ingredients/:id"
              element={<IngredientPage />}
            />
            <Route path="/profile/orders" element={<OrdersPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      )}
    </ErrorBoundary>
  );
}

export default App;
