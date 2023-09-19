import { useEffect } from "react";
import ErrorBoundary from "../../utils/errorBoudary";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import {
  HomePage,
  RegistrationPage,
  LoginPage,
  ForgotPage,
  ProfilePage,
  ErrorPage,
  IngredientPage,
  OrdersPage,
  FeedPage,
  FeedOrderPage,
} from "../../pages/index";

import { getIngredientsData } from "../../services/actions/ingredients";
import { ResetPage } from "../../pages/reset-pass/reset-pass";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredientDetails/ingredientDetails";
import AppHeader from "../header/header";
import { OnlyAuth, OnlyUnAuth } from "../protectedRoute/protectdRoute";
import FeedOrderDetails from "../feedOrderDetails/feedOrderDetails";
import { checkUserAuth } from "../../services/actions/profile";
import { useAppDispatch, useAppSelector } from "../../index";

function App() {
  const dispatch = useAppDispatch();
  const { items, itemsRequest, itemsRequestMessage, itemsFailed } = useAppSelector(
    (store) => store.allItems
  );
  const location = useLocation();
  const back: Location | undefined = location.state?.back;
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(checkUserAuth());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(getIngredientsData());
  }, [dispatch]);

  const closeIngredientPop = () => {
    navigate(-1);
  };

  return itemsRequest || itemsFailed ? (
    <p className="text text_type_main-large mt-30 ml-30">{itemsRequestMessage}</p>
  ) : (
    <ErrorBoundary>
      <AppHeader />

      {items.length && (
        <>
          <Routes location={back || location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/feed" element={<FeedPage />} />
            <Route path="/register" element={<OnlyUnAuth component={<RegistrationPage />} />} />
            <Route path="/login" element={<OnlyUnAuth component={<LoginPage />} />} />
            <Route path="/forgot-password" element={<OnlyUnAuth component={<ForgotPage />} />} />
            <Route path="/reset-password" element={<OnlyUnAuth component={<ResetPage />} />} />
            <Route path="/profile" element={<OnlyAuth component={<ProfilePage />} />} />
            <Route path="/profile/orders" element={<OnlyAuth component={<OrdersPage />} />} />
            <Route
              path="/profile/orders/:id"
              element={<OnlyAuth component={<FeedOrderPage />} />}
            />
            <Route path="/ingredients/:id" element={<IngredientPage />} />
            <Route path="/feed/:id" element={<FeedOrderPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          {back && (
            <Routes>
              <Route
                path="/ingredients/:id"
                element={
                  <Modal header="Детали ингредиента" onClose={closeIngredientPop}>
                    <IngredientDetails />
                  </Modal>
                }
              />
              <Route
                path="/feed/:id"
                element={
                  <Modal onClose={closeIngredientPop}>
                    <FeedOrderDetails />
                  </Modal>
                }
              />
              <Route
                path="/profile/orders/:id"
                element={
                  <Modal onClose={closeIngredientPop}>
                    <FeedOrderDetails />
                  </Modal>
                }
              />
            </Routes>
          )}
        </>
      )}
    </ErrorBoundary>
  );
}

export default App;
