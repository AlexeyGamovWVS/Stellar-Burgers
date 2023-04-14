import React, { useEffect } from "react";
import ErrorBoundary from "../../utils/errorBoudary";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
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
import Modal from "../modal/modal";
import IngredientDetails from "../ingredientDetails/ingredientDetails";
import { REMOVE_SELECTED_INGREDIENT } from "../../services/actions/currentItem";

function App() {
  const dispatch = useDispatch();
  const { items, itemsRequest, itemsRequestMessage, itemsFailed } =
    useSelector((store) => store.allItems);

  React.useEffect(() => {
    dispatch(getIngredientsData());
  }, [dispatch]);
  const location = useLocation();
  const back = location.state?.back;
  console.log(back);
  console.log(location);
  const navigate = useNavigate();
  //const navigate = useNavigate();
  const { selectedIngredient } = useSelector(
    (store) => store.currentWatchItem
  );
  useEffect(() => {
    console.log(selectedIngredient);
  }, [selectedIngredient]);

  const closeIngredientPop = () => {
    navigate("/");
    dispatch({
      type: REMOVE_SELECTED_INGREDIENT,
    });
  };

  return itemsRequest || itemsFailed ? (
    <p className="text text_type_main-large mt-30 ml-30">
      {itemsRequestMessage}
    </p>
  ) : (
    <ErrorBoundary>
      {items.length && (
        <>
          <Routes location={back || location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/forgot-password" element={<ForgotPage />} />
            <Route path="/reset-password" element={<ResetPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/profile/orders" element={<OrdersPage />} />
            <Route
              path="/ingredients/:id"
              element={<IngredientPage />}
            />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Routes>
            {back && (
              <Route
                path="/ingredients/:id"
                element={
                  <>
                    <Modal
                      header="Детали ингредиента"
                      onClose={closeIngredientPop}
                    >
                      <IngredientDetails />
                    </Modal>
                  </>
                }
              />
            )}
          </Routes>
        </>
      )}
    </ErrorBoundary>
  );
}

export default App;
