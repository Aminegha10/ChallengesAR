/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoutes({ children }) {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/Login" />;
  } else {
    return children;
  }
}

export default ProtectedRoutes;
