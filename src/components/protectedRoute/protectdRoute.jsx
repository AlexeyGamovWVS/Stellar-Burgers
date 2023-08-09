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
