import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useContext } from "react";
import { LoginPage } from "../pages/login/Login";
import { HomePage } from "../pages/home/Home";
import { PrivateRoutes } from "./privateRoute";
import { getData } from "../storage/localStorage";
import { TOKEN_KEY } from "../constants/constants";
import { AuthContext } from "../context/AuthProvider";

const Router = () => {
  const { auth, setAuth } = useContext(AuthContext);

  useEffect(() => {
    const isAuth = async () => {
      //Get token from local storage
      const token = await getData(TOKEN_KEY);
      setAuth(token);
      //Set token in context
    };
    isAuth();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
