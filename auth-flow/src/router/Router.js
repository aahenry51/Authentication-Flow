import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "../pages/login/Login";
import { HomePage } from "../pages/home/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
