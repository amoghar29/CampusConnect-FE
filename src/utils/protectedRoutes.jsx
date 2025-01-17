import { Outlet,Navigate } from "react-router-dom";
import { useContext } from "react";
import {authContext} from "../context/authContext";
import Loading from "../components/common/Loading";
const ProtectedRoute = () => {
    const {isAuthenticated} = useContext(authContext);
    const user= isAuthenticated
    if(isAuthenticated === undefined){
        return <Loading message="Please wait..." loading={true} />
    }
    return user ? <Outlet /> : <Navigate to="/signin" />

}
export default ProtectedRoute;