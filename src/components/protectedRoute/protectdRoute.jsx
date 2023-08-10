import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Preloader } from "../preloader/preloader";

const ProtectedRouteElement = ({ onlyUnAuth, component }) => {
  const isAuthChecked = useSelector((store) => store.profile.isAuthChecked);
  const user = useSelector((store) => store.profile.userInfo);
  const location = useLocation();

  if (!isAuthChecked) {
    return <Preloader />;
  }

  if (onlyUnAuth && user) {
    const { from } = location.state || { from: { pathname: "/" } };
    return <Navigate to={from} />;
  }

  if (!onlyUnAuth && !user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return component;
};

export const OnlyAuth = ProtectedRouteElement;
export const OnlyUnAuth = ({ component }) => (
  <ProtectedRouteElement onlyUnAuth={true} component={component} />
);
