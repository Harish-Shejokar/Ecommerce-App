import React, { useEffect, useState } from "react";
import CartContext from "./Cart-Context";

const CartProvider = (props) => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [cartItem, setCartItem] = useState([]);

  const addItemToCartHandler = (item) => {
    // console.log(item);
    setCartItem((prevItem) => {
      let pointer = false;
      prevItem.map((elem) => {
        if (elem.title === item.title) {
          pointer = true;
          elem.quantity = parseInt(elem.quantity + 1);
        }
        return [...prevItem]
      });
     
      if (pointer) return [...prevItem];
      else return [...prevItem, item];
      
    });
  };
  let amount = 0;
  let quantity = 0;
  const totalAmountHandler = () => {
    cartItem.forEach((item) => {
      console.log(item)
      amount = parseInt(amount + item.quantity * item.price);
      quantity = parseInt(quantity + item.quantity);
    });
  };
  totalAmountHandler();

  useEffect(() => {
    setTotalAmount(amount);
    setTotalQuantity(quantity);
  }, [amount, quantity]);

  const removeItemFromCart = (item) => {
    setCartItem((prevItem) => {
        prevItem.forEach((elem) => {
        if (elem.quantity === 1 && elem.title === item) {
          console.log("hi");
          prevItem = prevItem.filter((list) => {
            return list !== elem;
          });
          // return [...prevItem];
        } else if (elem.title === item) {
          elem.quantity -= 1;
        }
      });

      return [...prevItem];
    });
  };

  const Context = {
    cartItems: cartItem,
    totalAmount: totalAmount,
    quantity: totalQuantity,
    addItemToCart: addItemToCartHandler,
    removeItemCart: removeItemFromCart,
  };
  return (
    <CartContext.Provider value={Context}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
