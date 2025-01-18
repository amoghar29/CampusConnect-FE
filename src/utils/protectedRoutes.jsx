import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "../context/authContext";
import Loading from "../components/common/Loading";

const ProtectedRoute = () => {
  const { isAuthenticated, isLoading } = useContext(authContext);
  
  if (isLoading) {
    return <Loading message="Please wait..." loading={true} />;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/signin" />;
};

export default ProtectedRoute;