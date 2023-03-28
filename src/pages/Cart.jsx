import React, { useContext } from "react";
import { SpContext } from "../context/ShopContext";
import { PRODUCTS } from "../products";

import "../styles/Cart.css";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems,getTotalCartAmount } = useContext(SpContext);
  const totalAmount =  getTotalCartAmount()

  const navigate =  useNavigate();
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id]) {
            return <CartItem data={product} />;
          }
        })}
      </div>
      {totalAmount > 0 ?(
      <div className="checkout">
        <p>Subtotal: ${totalAmount}</p>
        <button onClick = {() => navigate("/")}>Continue Shopping</button>
        <button>Checkout</button>
      </div>
      ) : (
        <h1>Your Cart is Empty</h1>
      )}
    </div>
  );
};

export default Cart;
