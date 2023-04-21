import React, { useEffect, useState ,useContext} from "react";
import CartContext from "./Cart-Context";
import CreateAuthCtx from "./AuthCtx/Auth-Context";

const CartProvider = (props) => {
  const AuthCtx = useContext(CreateAuthCtx);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [cartItem, setCartItem] = useState([]);

  console.log(cartItem)
  const postDataOnBackEnd = async() => {
    const email = AuthCtx.userEmail.replace(/[^a-z0-9 -]/gi, "");
   
    try {
      const response = await fetch(
        `https://crudcrud.com/api/f5c90e0e86c543c89117a00514de843f/${email}`,
        {
          method: "POST",
          body: JSON.stringify({
            cartItems:cartItem,
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
  }

  const deleteDataFromBackend = async(Id) => {
    const email = AuthCtx.userEmail.replace(/[^a-z0-9 -]/gi, "");
    // console.log(email);
    try {
      const response = await fetch(
        `https://crudcrud.com/api/f5c90e0e86c543c89117a00514de843f/${email}/${Id}`,
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
  }
 
  
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
    // deleteDataFromBackend();
   if(cartItem.length > 0) postDataOnBackEnd();
    
  }

  let amount = 0;
  let quantity = 0;
  const totalAmountHandler = () => {
    cartItem.forEach((item) => {
      // console.log(item)
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

  const BackEndData = (data) => {
    data.map((item, index) => {
      if (item.cartItems.length > 0) {
        let cartItem = item.cartItems;
        let Id = item._id;
        deleteDataFromBackend(Id);
        console.log(cartItem,Id);
      }
    });

    // setCartItem(data);
  }

  const Context = {
    cartItems: cartItem,
    totalAmount: totalAmount,
    quantity: totalQuantity,
    addItemToCart: addItemToCartHandler,
    removeItemCart: removeItemFromCart,
    BackEndData : BackEndData,
  };
  return (
    <CartContext.Provider value={Context}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
