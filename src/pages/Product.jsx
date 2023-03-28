import React, { useContext } from "react";
import ShopContext, { SpContext } from "../context/ShopContext";


const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart,cartItems} = useContext(SpContext);
  const cartItemAmount = cartItems[id];
  return (
    <div className="product">
      <img src={productImage} />
      <div className="description">
        <p><b>{productName}</b></p>
        <p>${price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount}) </>}
        </button>
    </div>
  );
};

export default Product;
