import { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
export const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const verifyToken = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/auth/verify`, {
          withCredentials: true,
        });
        if (response.status === 200) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error("Token verification failed:", error);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    verifyToken();
  }, []);

  const login = (token) => {
    Cookies.set("access_token", token, { expires: 1, path: "/" }); // Ensure path is set
    setIsAuthenticated(true);
  };

  const logout = async () => {
    try {
      await axios.post(
        `${BACKEND_URL}/auth/signout`,
        {},
        { withCredentials: true }
      );
      Cookies.remove("access_token");
      setIsAuthenticated(false);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Prevent rendering the app until authentication is verified
  }

  return (
    <authContext.Provider
      value={{ isAuthenticated, login, logout, setIsAuthenticated }}
    >
      {children}
    </authContext.Provider>
  );
};
