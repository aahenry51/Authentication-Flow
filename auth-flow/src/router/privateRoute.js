import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

export const PrivateRoutes = (t) => {
  const { auth, setAuth } = useContext(AuthContext);
  //let auth = { token: false };
  return auth.token ? <Outlet /> : <Navigate to="/login" />;
};
