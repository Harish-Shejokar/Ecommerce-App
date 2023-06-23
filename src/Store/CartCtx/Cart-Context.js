import React from 'react'

const CartContext = React.createContext(
    {
        cartItems: [],
        addItemToCart : {}
    }
);
  

export default CartContext;
