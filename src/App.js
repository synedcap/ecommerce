import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import ShopContext from "./context/ShopContext";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";


const App = () => {
  return (
    <div className="App">
      <ShopContext>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
      </ShopContext>
    </div>
  );
};

export default App;
