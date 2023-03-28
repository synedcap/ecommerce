import React, {createContext } from 'react';
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

    const [ cartItems, setCartItems] = useState();
    return (
        <SpContext.Provider>
            {props.children}
        </SpContext.Provider>
    );
};

export default ShopContext;