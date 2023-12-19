import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Contact from "./components/Contact";
import Restaurants from "./components/Restaurants";
import Res1 from "./components/Restro/Res1";
import Res2 from "./components/Restro/Res2";
import Res3 from "./components/Restro/Res3";
import Res4 from "./components/Restro/Res4";
import Res5 from "./components/Restro/Res5";
import Res6 from "./components/Restro/Res6";
import Cart1 from "./components/Carts/Cart1";
import Cart2 from "./components/Carts/Cart2";
import History from "./components/History";
import OrderState from "./Context/orders/OrderState";




const App = () => {
  return (
    <div>
      <>
      <OrderState>
        <Router> 
          <Navbar />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/About" element={<About />} />
              <Route exact path="/History" element={<History />} />
              <Route exact path="/Login" element={<Login />} />
              <Route exact path="/SignUp" element={<SignUp />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="/Restaurants" element={<Restaurants />} />
              <Route exact path="/Restaurants/Restro/Res1" element={<Res1 />} />
              <Route exact path="/Restaurants/Restro/Res2" element={<Res2 />} />
              <Route exact path="/Restaurants/Restro/Res3" element={<Res3 />} />
              <Route exact path="/Restaurants/Restro/Res4" element={<Res4 />} />
              <Route exact path="/Restaurants/Restro/Res5" element={<Res5 />} />
              <Route exact path="/Restaurants/Restro/Res6" element={<Res6 />} />
              <Route exact path="/Restaurants/Restro/Res1/Carts/Cart1" element={<Cart1 />} />
              <Route exact path="/Restaurants/Restro/Res2/Carts/Cart2" element={<Cart2 />} />
              
            </Routes>
          </div>
        </Router>
      </OrderState>
      </>
    </div>
  )
}

export default App

