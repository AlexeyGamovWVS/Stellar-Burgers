import { Navigate, useLocation } from "react-router-dom";
import { Preloader } from "../preloader/preloader";
import { useAppSelector } from "../..";

type IProtected = {
  onlyUnAuth?: boolean;
  component: JSX.Element;
};

interface IOnlyUnAuth {
  component: JSX.Element;
}

const ProtectedRouteElement = ({ onlyUnAuth, component }: IProtected): JSX.Element => {
  const isAuthChecked = useAppSelector((store) => store.profile.isAuthChecked);
  const user = useAppSelector((store) => store.profile.userInfo);
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
export const OnlyUnAuth = ({ component }: IOnlyUnAuth): JSX.Element => (
  <ProtectedRouteElement onlyUnAuth={true} component={component} />
);
