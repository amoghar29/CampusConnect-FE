import { createContext, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
export const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [verificationDone, setVerificationDone] = useState(false);

  const verifyToken = async () => {
    if (verificationDone) return isAuthenticated;
    
    setIsLoading(true);
    try {
      const response = await axios.get(`${BACKEND_URL}/auth/verify`, {
        withCredentials: true,
      });
      if (response.status === 200) {
        setIsAuthenticated(true);
        return true;
      } else {
        setIsAuthenticated(false);
        return false;
      }
    } catch (error) {
      setIsAuthenticated(false);
      return false;
    } finally {
      setIsLoading(false);
      setVerificationDone(true);
    }
  };

  const login = (token) => {
    Cookies.set("access_token", token, { expires: 1, path: "/" });
    setIsAuthenticated(true);
    setVerificationDone(true);
    setIsLoading(false);
  };

  const logout = async () => {
    setIsLoading(true);
    try {
      await axios.post(
        `${BACKEND_URL}/auth/signout`,
        {},
        { withCredentials: true }
      );
      Cookies.remove("access_token");
      setIsAuthenticated(false);
      setVerificationDone(true);
    } catch (error) {
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <authContext.Provider
      value={{ 
        isAuthenticated, 
        login, 
        logout, 
        setIsAuthenticated, 
        isLoading,
        verifyToken 
      }}
    >
      {children}
    </authContext.Provider>
  );
};