import React, { useEffect, useState, useContext, useCallback } from "react";
import CartContext from "./Cart-Context";
import CreateAuthCtx from "./AuthCtx/Auth-Context";
import { Prev } from "react-bootstrap/esm/PageItem";

const CartProvider = (props) => {
  const AuthCtx = useContext(CreateAuthCtx);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [cartItem, setCartItem] = useState([]);

  async function getDataFromBackend() {
   
  const email = AuthCtx.userEmail.replace(/[^a-z0-9 -]/gi, "");
   try {
     const response = await fetch(
       `https://crudcrud.com/api/b0d5e1c3e3ae4132838eaca9d58752b2/${email}`
     );

     if (response.ok) {
       const data = await response.json();
       const dataFromBackEnd = data;
       console.log("get ok", dataFromBackEnd);
       console.log(dataFromBackEnd[0].cartItems);
       const onlyCartItemsArray = dataFromBackEnd[0].cartItems;
       setCartItem(onlyCartItemsArray);
     } else {
       console.log("get not ok");
     }
   } catch (err) {
     console.log(err);
   }
 }


  // console.log(cartItem)
  const postDataOnBackEnd = async () => {
    const email = AuthCtx.userEmail.replace(/[^a-z0-9 -]/gi, "");

    try {
      const response = await fetch(
        `https://crudcrud.com/api/b0d5e1c3e3ae4132838eaca9d58752b2/${email}`,
        {
          method: "POST",
          body: JSON.stringify({
            cartItems: cartItem,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        console.log("ok");
        const data = await response.json();
        // console.log(data);
      } else {
        console.log("not ok");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteDataFromBackend = async (Id) => {
    const email = AuthCtx.userEmail.replace(/[^a-z0-9 -]/gi, "");
    // console.log(email);
    try {
      const response = await fetch(
        `https://crudcrud.com/api/b0d5e1c3e3ae4132838eaca9d58752b2/${email}/${Id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        console.log("ok");
        // const data = await response.json();
        // console.log(data);
      } else {
        console.log("not ok");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addItemToCartHandler = (item) => {
  
    setCartItem((Prev) => {
      if (Prev.length === 0) return [item];
      // if item already present then increase its quantity only
      let flag = false;
        Prev.map(elem => {
         if (elem.title === item.title) {
           flag = true;
          console.log(elem.quantity);
          elem.quantity = Number(elem.quantity + 1);
         } 
         
      })

      if (flag) return [...Prev];
      else return [item, ...Prev];
    });
       
     
    // setCartItem((prevItem) => {
    //   let pointer = false;
    //   console.log(prevItem);
    //   prevItem.map((elem) => {
    //     if (elem.title === item.title) {
    //       pointer = true;
    //       elem.quantity = parseInt(elem.quantity + 1);
    //     }
    //     return [...prevItem];
    //   });

    //   if (pointer) return [...prevItem];
    //   else return [...prevItem, item];
    // });

    // if (cartItem.length > 0) postDataOnBackEnd();

    

  };

  let amount = 0;
  let quantity = 0;
  const totalAmountHandler = () => {
    cartItem.forEach((item) => {
      // console.log(item)
      amount = amount + item.quantity * item.price + 0;
      quantity = quantity + item.quantity+0;
    });
    
  }
  totalAmountHandler();

  useEffect(() => {
    setTotalAmount(amount);
    setTotalQuantity(quantity);
  },);

  const removeItemFromCart = (item) => {
    setCartItem((prevItem) => {
      prevItem.forEach((elem) => {
        if (elem.quantity === 1 && elem.title === item) {
          console.log("hi");
          prevItem = prevItem.filter((list) => {
            return list !== elem;
          });
        } else if (elem.title === item) {
          elem.quantity = Number(elem.quantity-1);
        }
      });

      return [...prevItem];
    });
  };

  const BackEndData = (data) => {
    data.map((item, index) => {
      if (item.cartItems.length > 0) {
        let cartItem = item.cartItems;
        let Id = item._id;
        deleteDataFromBackend(Id);
        console.log(cartItem, Id);
      }
    });

    // setCartItem(data);
  };

  const updateDataOnCart = () => {
    if (cartItem.length > 0) getDataFromBackend(); // get data from crud-crud and add into cart
  }

  const Context = {
    cartItems: cartItem,
    totalAmount: totalAmount,
    quantity: totalQuantity,
    addItemToCart: addItemToCartHandler,
    removeItemCart: removeItemFromCart,
    BackEndData: BackEndData,
    updateDataOnCart: updateDataOnCart,
  };
  return (
    <CartContext.Provider value={Context}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
