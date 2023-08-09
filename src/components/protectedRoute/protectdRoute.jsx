import { Navigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../../services/actions/profile";
import { useEffect } from "react";
import PropTypes from "prop-types";
import { Preloader } from "../preloader/preloader";

const ProtectedRouteElement = ({ onlyUnAuth, component }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);

  const isAuthChecked = useSelector((store) => store.profile.isAuthChecked);
  const user = useSelector((store) => store.profile.userInfo);
  const location = useLocation();

  console.log(location);
  console.log(user);
  if (!isAuthChecked) {
    return <Preloader />;
  }

  if (onlyUnAuth && user) {
    // Пользователь авторизован, но роут предназначен для неавторизованного пользователя
    // Делаем редирект на главную страницу или на тот адрес, что записан в location.state.from
    const { from } = location.state || { from: { pathname: "/" } };
    return <Navigate to={from} />;
  }

  if (!onlyUnAuth && !user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  // !onlyUnAuth && user Пользователь авторизован и роут для авторизованного пользователя
  return component;
};

export const OnlyAuth = ProtectedRouteElement;
export const OnlyUnAuth = ({ component }) => (
  <ProtectedRouteElement onlyUnAuth={true} component={component} />
);

// const dispatch = useDispatch();
// useEffect(() => {
//   dispatch(getUserInfo());
//   // eslint-disable-next-line react-hooks/exhaustive-deps
// }, []);

//   return auth && user ? (
//     <Navigate to={"/"} replace />
//   ) : !auth && !user ? (
//     <Navigate to={"/login"} replace />
//   ) : (
//     children
//   );
// }

// ProtectedRouteElement.propTypes = {
//   onlyUnAuth: PropTypes.bool.isRequired,
//   children: PropTypes.element.isRequired,
// };
