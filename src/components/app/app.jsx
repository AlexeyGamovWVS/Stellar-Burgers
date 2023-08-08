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
} from "../../pages";

import { useSelector, useDispatch } from "react-redux";
import { getIngredientsData } from "../../services/actions/ingredients";
import { ResetPage } from "../../pages/reset-pass/reset-pass";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredientDetails/ingredientDetails";
import { REMOVE_SELECTED_INGREDIENT } from "../../services/actions/currentItem";
import AppHeader from "../header/header";
import { ProtectedRouteElement } from "../protectedRoute/protectdRoute";
import FeedOrderDetails from "../feedOrderDetails/feedOrderDetails";

function App() {
  const dispatch = useDispatch();
  const { items, itemsRequest, itemsRequestMessage, itemsFailed } = useSelector(
    (store) => store.allItems
  );
  const location = useLocation();
  const back = location.state?.back;
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getIngredientsData());
  }, [dispatch]);

  const closeIngredientPop = () => {
    navigate(-1);
    dispatch({
      type: REMOVE_SELECTED_INGREDIENT,
    });
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
            <Route
              path="/register"
              element={
                <ProtectedRouteElement auth>
                  <RegistrationPage />
                </ProtectedRouteElement>
              }
            />
            <Route
              path="/login"
              element={
                <ProtectedRouteElement auth>
                  <LoginPage />
                </ProtectedRouteElement>
              }
            />
            <Route
              path="/forgot-password"
              element={
                <ProtectedRouteElement auth>
                  <ForgotPage />
                </ProtectedRouteElement>
              }
            />
            <Route
              path="/reset-password"
              element={
                <ProtectedRouteElement auth>
                  <ResetPage />
                </ProtectedRouteElement>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRouteElement auth={false}>
                  <ProfilePage />
                </ProtectedRouteElement>
              }
            />
            <Route
              path="/profile/orders"
              element={
                <ProtectedRouteElement auth={false}>
                  <OrdersPage />
                </ProtectedRouteElement>
              }
            />
            <Route
              path="/profile/orders/:id"
              element={
                <ProtectedRouteElement auth={false}>
                  <FeedOrderPage />
                </ProtectedRouteElement>
              }
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
