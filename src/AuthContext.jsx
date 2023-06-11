import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setuser] = useState({});

  useEffect(() => {
    // Function to check the authentication status
    const checkAuthStatus = async () => {
      try {
        const response = await axios.get(
          "https://house-bill-manager-production.up.railway.app/users/checkAuth",
          {
            withCredentials: true,
          }
        ); // Make a request to your backend route to check authentication status
        if (response.data.msg === "logged in") {
          setIsAuthenticated(true);
          setuser(response.data.user);
        } else {
          setIsAuthenticated(false);
          setuser({});
        }
      } catch (error) {
        setIsAuthenticated(false);
      }
    };

    checkAuthStatus();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  );
};
