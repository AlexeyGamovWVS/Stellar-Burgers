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
} from "../../pages";
import { useSelector, useDispatch } from "react-redux";
import { getIngredientsData } from "../../services/actions/ingredients";
import { ResetPage } from "../../pages/reset-pass/reset-pass";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredientDetails/ingredientDetails";
import { REMOVE_SELECTED_INGREDIENT } from "../../services/actions/currentItem";
import AppHeader from "../header/header";
import { ProtectedRouteElement } from "../protectedRoute/protectdRoute";

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
      <>
        <AppHeader />
        {items.length && (
          <>
            <Routes location={back || location}>
              <Route path="/" element={<HomePage />} />
              <Route path="/register" element={<RegistrationPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/forgot-password" element={<ForgotPage />} />
              <Route path="/reset-password" element={<ResetPage />} />
              <Route
                path="/profile"
                element={
                  <ProtectedRouteElement>
                    <ProfilePage />
                  </ProtectedRouteElement>
                }
              />
              <Route
                path="/profile/orders"
                element={
                  <ProtectedRouteElement>
                    <OrdersPage />
                  </ProtectedRouteElement>
                }
              />
              {/* <Route path="/profile/orders/:id" element={<OrderInfoPage />} /> */}
              <Route path="/ingredients/:id" element={<IngredientPage />} />
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
              </Routes>
            )}
          </>
        )}
      </>
    </ErrorBoundary>
  );
}

export default App;
