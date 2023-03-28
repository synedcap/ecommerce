import React, { useContext } from "react";
import { SpContext } from "../context/ShopContext";
import { PRODUCTS } from "../products";

import "../styles/Cart.css";
import CartItem from "./CartItem";

const Cart = () => {
  const { cartItems } = useContext(SpContext);
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
    </div>
  );
};

export default Cart;
