import React, { useEffect, useState, useContext } from "react";
import CartContext from "./Cart-Context";
import authContext from "../AuthCtx/Auth-Context"

const CartProvider = (props) => {
  const AuthCtx = useContext(authContext);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [cartItem, setCartItem] = useState([]);
  let email = "";
  if (AuthCtx.isLoggedIn)
    email = AuthCtx.userEmail.replace(/[^a-z0-9 -]/gi, "");

  const [putId, setPutId] = useState(localStorage.getItem(email));

  const postDataOnBackEnd = async (newCartItems) => {
    try {
      const response = await fetch(
        `https://crudcrud.com/api/70e9d428de274e93ac235a54e4ab74f0/${email}`,
        {
          method: "POST",
          body: JSON.stringify({
            cartItems: newCartItems,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        console.log("post ok");
        const data = await response.json();
        console.log(data._id);
        localStorage.setItem(email, data._id);
        setPutId(localStorage.getItem(email));
        // console.log(data);
      } else {
        console.log("not ok");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const putCartItemOnCrud = async (newCartItems) => {
    // console.log(putId);

    try {
      const response = await fetch(
        `https://crudcrud.com/api/70e9d428de274e93ac235a54e4ab74f0/${email}/${localStorage.getItem(
          email
        )}`,
        {
          method: "PUT",
          body: JSON.stringify({
            cartItems: newCartItems,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        console.log("put ok");
        // const data = await response.json();
      } else {
        console.log("put not ok");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getDataFromCrud = async () => {
    try {
      const response = await fetch(
        `https://crudcrud.com/api/70e9d428de274e93ac235a54e4ab74f0/${email}`
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        console.log("get ok", data[0].cartItems);
        console.log(data);
        setCartItem(data[0].cartItems);
      } else {
        console.log("put not ok");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addItemToCartHandler = (item) => {
    let newCartItems;

    let flag = false;

    setCartItem((Prev) => {
      // if item already present then increase its quantity only
      Prev.map((elem) => {
        if (elem.title === item.title) {
          flag = true;
          console.log(elem.quantity);
          elem.quantity = Number(elem.quantity + 1);
        }
      });

      if (flag) newCartItems = [...Prev];
      else newCartItems = [item, ...Prev];

      console.log(newCartItems);
      return newCartItems;
    });

    // if (putId) {
    //   putCartItemOnCrud(newCartItems);
    // } else {
    //   postDataOnBackEnd(newCartItems);
    // }
  };

  let amount = 0;
  let quantity = 0;
  const totalAmountHandler = () => {
    cartItem.forEach((item) => {
      // console.log(item)
      amount = amount + item.quantity * item.price + 0;
      quantity = quantity + item.quantity + 0;
    });
  };
  totalAmountHandler();

  useEffect(() => {
    setTotalAmount(amount);
    setTotalQuantity(quantity);
  });

  // useEffect(() => {
  //    if (AuthCtx.isLoggedIn) getDataFromCrud();
  // },[AuthCtx.isLoggedIn])

  const removeItemFromCart = (item) => {
    let majorUpdationInCart = false;
    let updatedList;
    setCartItem((prevItem) => {
      prevItem.forEach((elem) => {
        if (elem.quantity === 1 && elem.title === item) {
          console.log("hi");
          majorUpdationInCart = true;
          updatedList = prevItem.filter((list) => {
            return list !== elem;
          });
        } else if (elem.title === item) {
          elem.quantity = Number(elem.quantity - 1);
          updatedList = [...prevItem];
        }
      });

      return [...updatedList];
    });
    putCartItemOnCrud(updatedList);
  };

  const Context = {
    cartItems: cartItem,
    totalAmount: totalAmount,
    quantity: totalQuantity,
    addItemToCart: addItemToCartHandler,
    removeItemCart: removeItemFromCart,
    getDataFromCrud,
  };
  return (
    <CartContext.Provider value={Context}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
