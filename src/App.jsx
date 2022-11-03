import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import Servicios from "./components/Servicios/Servicios";
import "animate.css";
import Shop from "./components/Shop/Shop";
import Product from "./components/Product/Product";
import Cart from "./components/Cart/Cart";
import Contact from "./components/Contact/Contact";
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Services" element={<Servicios />} />
          <Route path="Shop" element={<Shop />} />
          <Route path="Shop/:id" element={<Product />} />
          <Route path="Cart" element={<Cart />} />
          <Route path="Contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
