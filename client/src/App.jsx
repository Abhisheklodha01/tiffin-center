import { useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import axios from "axios";
import { Context } from "./main";
import { server } from "./utils/constants";
import Food from "./components/Food";
import FoodPrice from "./components/FoodPrice";
import ContectUs from "./components/ContectUs";
import LocateUs from "./components/LocateUs";
import AboutUs from "./components/AboutUs";

function App() {
  const { isAuthenticated, setUser } = useContext(Context);
  const token = localStorage.getItem("token");
  useEffect(() => {
    const FetchUserDetails = async () => {
      const { data } = await axios.get(`${server}/users/getprofile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(data.user);
    };

    FetchUserDetails();
  }, [isAuthenticated]);

  useEffect(() => {
    const clearLocalStorageAfterDelay = () => {
      const twentyFourHoursInMilliseconds = 24 * 60 * 60 * 1000;
      setTimeout(() => {
        localStorage.removeItem("token");
      }, twentyFourHoursInMilliseconds);
    };

    clearLocalStorageAfterDelay();

    return () => clearTimeout(clearLocalStorageAfterDelay);
  }, []);

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/food" element={<Food />} />
          <Route path="/foodprice" element={<FoodPrice />} />
          <Route path="/contect" element={<ContectUs />} />
          <Route path="/locate" element={<LocateUs />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
