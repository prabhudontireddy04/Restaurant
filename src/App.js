import React from "react";
import "./assets/css/style.css";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import CheckoutPage from "./pages/checkoutpage";
import Login from "./components/Home/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckoutPage/>} />
          <Route path="/login" element={<Login />} />


        </Routes>
        
      </BrowserRouter>
    </>
  );
};

export default App;
