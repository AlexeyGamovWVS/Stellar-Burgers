import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../../services/actions/profile";
import { useEffect } from "react";
import PropTypes from "prop-types";

export function ProtectedRouteElement({ auth, children }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserInfo());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { userInfo } = useSelector((store) => store.profile);
  return auth && userInfo ? (
    <Navigate to={"/"} replace />
  ) : !auth && !userInfo ? (
    <Navigate to={"/login"} replace />
  ) : (
    children
  );
}

ProtectedRouteElement.propTypes = {
  auth: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
};
