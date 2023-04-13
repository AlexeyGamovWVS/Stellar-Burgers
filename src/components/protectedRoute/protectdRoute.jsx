import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export function ProtectedRouteElement({ children }) {
  const { userInfo } = useSelector((store) => store.profile);
  return userInfo !== null ? (
    children
  ) : (
    <Navigate to={"/login"} replace />
  );
}
