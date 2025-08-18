// components/auth/ProtectedRoute.js
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ roles }) => {
  const { token, user } = useSelector((state) => state.auth);

  // Not logged in → redirect
  if (!token) {
    return <Navigate to="/" replace />;
  }

  // If route requires specific role → check it
  if (roles && !roles.includes(user?.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  // Auth + Role match → render child route
  return <Outlet />;
};

export default ProtectedRoute;
