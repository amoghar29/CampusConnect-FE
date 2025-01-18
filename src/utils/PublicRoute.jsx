import { Navigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { authContext } from "../context/authContext";
import Loading from "../components/common/Loading";

const PublicRoute = ({ children }) => {
  const { isAuthenticated, isLoading, verifyToken } = useContext(authContext);
  const [isVerifying, setIsVerifying] = useState(true);

  useEffect(() => {
    const verify = async () => {
      await verifyToken();
      setIsVerifying(false);
    };
    verify();
  }, [verifyToken]);

  if (isVerifying || isLoading) {
    return <Loading message="Please wait..." loading={true} />;
  }

  return !isAuthenticated ? children : <Navigate to="/admin/dashboard" replace />;
};

export default PublicRoute;