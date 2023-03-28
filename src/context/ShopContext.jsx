import React, { createContext,useState } from 'react';
import { PRODUCTS } from '../products';

export const SpContext = createContext(null);

const getDefaultCart = () => {

    let cart = {};
    for (let i = 1; i < PRODUCTS.length; i++) {
     cart[i] = 0;   
    }
    return cart;
}

const ShopContext = (props) => {   

    const [ cartItems, setCartItems] = useState(getDefaultCart());
    const addToCart = (itemId) => {
        setCartItems((prev) =>({...prev,[itemId]: prev[itemId] + 1}))
    }
    const removeFromCart = (itemId) => {
        setCartItems((prev) =>({...prev,[itemId]: prev[itemId] - 1}))
    }
    const contextvalue = { cartItems, addToCart, removeFromCart}

    return (
        <SpContext.Provider value={contextvalue}>
            {props.children}
        </SpContext.Provider>
    );
};

export default ShopContext;