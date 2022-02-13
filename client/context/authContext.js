import React, { useContext, useEffect, useState } from "react";
import { GET_USER } from "../utils/queries";
const AuthContext = React.createContext();
const AuthUpdateContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};
export const useSetAuth = () => {
  return useContext(AuthUpdateContext);
};

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isAuth: false,
    user: false,
  });
  useEffect(async () => {
    try {
      const user = await GET_USER();
      if (user.status === "error") throw user;
      setAuth({
        isAuth: true,
        user: user.detail,
      });
    } catch (error) {
      console.error(error);
      setAuth({ isAuth: false, user: null });
    }
  }, [auth.isAuth]);

  return (
    <AuthContext.Provider value={auth}>
      <AuthUpdateContext.Provider value={setAuth}>
        {children}
      </AuthUpdateContext.Provider>
    </AuthContext.Provider>
  );
};
